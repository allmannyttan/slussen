import { Application, Request, Response } from 'express'
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

const transformCase = (fi2case: Fi2Case): Case => {
  const comment = fi2case.fi2case_descr.find(d => d.usage === "Comment")?.$t || ''
  const description = fi2case.fi2case_descr.find(d => d.usage === "Description")?.$t || ''

  // console.log(JSON.stringify(fi2case, null, 2))
  console.log(...Object.keys(fi2case))
  const the: any = fi2case
  console.log(the.fi2case_notifier)

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
      url: 'fi2case',
    })

    // console.log(JSON.stringify(raw.fi2simplemessage.fi2case[0], null, 2))

    const result = raw.fi2simplemessage.fi2case.slice(0, 1).map(transformCase)
    return result
  } catch (err) {
    throw new Error(err)
  }
}

const createCase = async (data: CaseRequest): Promise<Case> => {
  try {
    const _raw: Fi2CasesResponse = await client.post({
      url: 'fi2case',
      body: data
    })
    return new Promise(() => <Case>{})
    //const result = transformCase(raw.fi2simplemessage.fi2case)
    //return result    
  } catch (err) {
    console.log("felaktig data")
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
      const caseItem: CaseRequest = req.body;
      res.json(
        await createCase(caseItem)
      )
    })
  )
}

export default {
}
