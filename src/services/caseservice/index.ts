import { Application, Request, Response } from 'express'
import { authMiddleware } from '@app/middleware/auth'
import { client } from '@app/adapters/fastapiadapter'
import asyncHandler from 'express-async-handler'
import { Fi2Value } from '@app/commonTypes/types'

import { Case, CaseCreateRequest, CaseUpdateRequest, Fi2Case, Fi2CasesResponse } from './types'
import { makeDescriptionExtractor, createPayload, convertPayload, updatePayload } from './utils'
import logger from '@app/helpers/logger'

const getPart = (parts: Fi2Value[], partName: string): string => {
  const partNode = parts.filter((part: Fi2Value) => part.fi2value_code === partName)

  return partNode.length > 0 ? partNode[0].fi2value_value : ''
}

const transformCase = (fi2case: Fi2Case): Case => {
  const extract = makeDescriptionExtractor(fi2case)
  const comment = extract('Comment')
  const description = extract('Description')

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

    const result = raw.fi2simplemessage.fi2case.map(transformCase)
    return result
  } catch (err) {
    throw new Error(err as string)
  }
}

const createCase = async (data: CaseCreateRequest): Promise<Case> => {
  const payload = createPayload(data)

  try {
    const response = await client.post(
      {
        url: 'fi2case',
      },
      convertPayload(payload)
    )

    if (response.errormessage) {
      return Promise.reject(response.errormessage)
    }

    return transformCase(response.fi2case)
  } catch (err) {
    throw err
  }
}

const updateCase = async (id: string, data: CaseUpdateRequest): Promise<Case> => {
  const caseData = await client.get({
    url: `fi2case/${id}`,
  })

  if (!caseData) {
    return Promise.reject('Could not find case.')
  }

  const payload = updatePayload(caseData.fi2case, data)
  const xmlPayload = convertPayload(payload)

  const response = await client.put(
    {
      url: `fi2case/${id}`,
    },
    xmlPayload
  )

  if (response.errormessage) {
    return Promise.reject(response.errormessage)
  }
  return transformCase(response.fi2case)
}

export const routes = (app: Application) => {
  app
    .get(
      '/cases',
      authMiddleware,
      asyncHandler(async (_req: Request, res: Response) => {
        return res.json(await getCases())
      })
    )
    .post(
      '/cases',
      authMiddleware,
      asyncHandler(async (req: Request, res: Response) => {
        const caseItem: CaseCreateRequest = req.body
        try {
          const createdCase = await createCase(caseItem)
          res.status(201).send(createdCase)
        } catch (err) {
          logger.error(JSON.stringify(err, null, 2))
          res.status(400).send({
            error: 'Error in input, check logs',
          })
        }
      })
    )
    .put(
      '/cases/:id',
      authMiddleware,
      asyncHandler(async (req: Request, res: Response) => {
        try {
          const caseItem: CaseUpdateRequest = req.body
          const updatedCase = await updateCase(req.params.id, caseItem)
          res.status(200).send(updatedCase)
        } catch (err) {
          logger.error(JSON.stringify(err, null, 2))
          res.status(400).send({
            error: 'Error in input, check logs',
          })
        }
      })
    )
}

export default {
  createCase,
  updateCase,
}
