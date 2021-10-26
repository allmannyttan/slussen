import xml2json from 'xml2json'
import { Application, Request, Response } from 'express'
const { DOMParser } = require('xmldom')
import { authMiddleware } from '@app/middleware/auth'
import { client } from '@app/adapters/fastapiadapter'
import asyncHandler from 'express-async-handler'
import { Fi2Value } from '@app/commonTypes/types'

import {
 Case,
 CaseRequest,
 Fi2Case,
 Fi2CasesResponse
} from './types'
import { createCaseBlock } from 'typescript'

// TODO: This is duplicated, maybe throughout the code base
const getPart = (parts: Fi2Value[], partName: string): string => {
  const partNode = parts.filter((part: Fi2Value) => part.fi2value_code === partName)

  return partNode.length > 0 ? partNode[0].fi2value_value : ''
}


const getXmlPostBody = (caseItem: CaseRequest): string => {
  const {title, description, category, id} = caseItem
  return xml2json.toXml(JSON.parse(`{
    "fi2case": {
      "xmlns": "http://www.fi2.se/schemas/1.31",
      "id": "${id? id: ""}",
      "fi2case_descr": [
          {
            "lang": "sv",
            "usage": "Description",
            "$t": "${title}"
          },
          {
            "lang": "sv",
            "usage": "Comment",
            "$t": "${description}"
          }
      ],
      "fi2case_category": {
        "fi2class_code": {"$t": "${category}},
        "fi2class_scheme": {
          "fi2scheme_id": {"$t": "Class_Fi2CaseCategoryType_01"},
          "fi2scheme_name": {"$t": "Ärendetyp Felanmälningar"},
          "fi2scheme_url": {"$t": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseCategoryType_01.xml"}
        }
      },
      "fi2case_status": {
        "fi2class_code": {"$t": "Completed"},
        "fi2class_scheme": {
          "fi2scheme_id": {"$t": "Class_Fi2CaseStatus_01"},
          "fi2scheme_name": {"$t": "Status Felanmälningar"},
          "fi2scheme_url": {"$t": "http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml"}
        }
      },
      "fi2case_parentobject": {
        "fi2item": "fi2property",
        "fi2parent_ids": [
          {"fi2_id": {"$t": "12345"}}
        ]
      } 
    }
  }`))
}

const transformCase = (fi2case: Fi2Case): Case => {
  const comment = fi2case.fi2case_descr.find(d => d.usage === "Comment")?.$t || ''
  const description = fi2case.fi2case_descr.find(d => d.usage === "Description")?.$t || ''

  // console.log(JSON.stringify(fi2case, null, 2))
  console.log(...Object.keys(fi2case))
  const the: any = fi2case
  console.log("eh", JSON.stringify(the, null, 2))

  return {
    id: fi2case.id,
    registrationDate: fi2case.fi2case_registrationdate || '',
    registrar: fi2case.fi2case_registrar || '',
    status: fi2case.fi2case_status.fi2class_code,
    comment,
    description,
    createdDate: getPart(fi2case.fi2case_value, 'CreatedDate'),
    changedBy: getPart(fi2case.fi2case_value, 'ChangedBy'),
    createdBy: getPart(fi2case.fi2case_value, 'CreatedBy'),
    changedDate: getPart(fi2case.fi2case_value, 'ChangedDate'),
  }
} 


const getCases = async (): Promise<Case[]> => {
  try {
    const raw: Fi2CasesResponse = await client.get({
      url: 'fi2case?limit=999',
    })

    // console.log(JSON.stringify(raw.fi2simplemessage.fi2case[0], null, 2))

    const result = raw.fi2simplemessage.fi2case.map(transformCase)
    return result
  } catch (err) {
    throw new Error(err)
  }
}

const createCase = async (data: CaseRequest): Promise<number> => {
  const xml = getXmlPostBody(data)
  try {
    const response = await client.post({
      url: 'fi2case',
    }, xml)
    console.log(JSON.stringify(response, null, 2))
    if (response.errormessage) {
      return 400
    }
    return 201
  } catch (err) {
    throw new Error(err)
  }
}

const updateCase = async (data: CaseRequest): Promise<number> => {
  try {
    const caseData = await client.get({
      url: `fi2case/${data.id}`,
      skipXmlSerialization: true
    })

    // console.log(caseData)

    const doc = new DOMParser().parseFromString(caseData, "application/xml")
    const status = doc.documentElement.getElementsByTagName("fi2case_status")[0]
    const foo = status.getElementsByTagName("fi2class_code")[0]
    const newFoo = foo.cloneNode(true)
    newFoo.data = "Completed"
    newFoo.nodeValue = "Completed"
    status.replaceChild(foo.firstChild, newFoo)
    const payload = doc.toString()
    console.log(payload)
    const response = await client.put({
      url: `fi2case/${data.id}`,
    }, payload)
    console.log(JSON.stringify(response, null, 2))
    if (response.errormessage) {
      return 400
    }
    return 201
  } catch (err) {
    throw new Error(err)
  }
  
  
}

export const routes = (app: Application) => {
  /**
   * @swagger
   * tags:
   *   name: Cases
   */

  /**
   * @swagger
   * /cases:
   *  get:
   *    summary: Gets all cases
   *    tags: [Cases]
   *    description: Gets a bunch of cases.
   *    parameters:
   *    security:
   *      - bearerAuth: []
   *    responses:
   *      '200':
   *        description: 'List of cases'
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/Case'
   *      '401':
   *        description: 'Unauthorized'
   */
  app.get(
    '/cases',
    authMiddleware,
    asyncHandler(async (_req: Request, res: Response) =>
      res.json(
        await getCases()
        // await getLeaseContracts(
        //   _req.query.rentalid as string,
        //   /true/i.test(_req.query.includeexpired as string),
        //   /true/i.test(_req.query.includetenants as string),
        //   /true/i.test(_req.query.includerentals as string),
        //   typeof _req.query.limit === 'string' ? parseInt(_req.query.limit) : undefined,
        //   typeof _req.query.offset === 'string' ? parseInt(_req.query.offset) : undefined,
        //   typeof _req.query.from === 'string' ? new Date(_req.query.from) : undefined,
        //   typeof _req.query.to === 'string' ? new Date(_req.query.to) : undefined
        // )
      )
    )
  )
  .post(
    '/cases',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      const caseItem: CaseRequest = req.body
      const statusCode = await createCase(caseItem)
      res
        .status(statusCode)
        .send()
    })
  )
  .put(
    '/cases/:id',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) => {
      const caseItem: CaseRequest = req.body
      caseItem.id = req.params.id
      const statusCode = await updateCase(caseItem)
      res
        .status(statusCode)
        .send()
    })
  )
}

export default {
}
