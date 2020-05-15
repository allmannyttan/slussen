import { Application, Request, Response } from 'express'
import { client } from '@app/adapters/fastapiadapter'
import { convertAddress } from '@app/helpers/converters'
import asyncHandler from 'express-async-handler'
import helper from '@app/helpers/fastAPIXmlListHelper'

import {
  Rental,
  Document,
  Area,
  Address,
  Fi2SpatiSystem,
  Fi2Document,
  Fi2Area,
  Fi2Value,
  Fi2SpatiSystemResponse,
  Fi2SpatiSystemsResponse,
} from './types'
import { authMiddleware } from '@app/middleware/auth'

const getPart = (parts: Fi2Value[], partName: string): string => {
  const partNode = parts.filter((part: Fi2Value) => part.fi2value_code === partName)

  return partNode.length > 0 ? partNode[0].fi2value_value : ''
}

const getAreas = (areas: Fi2Area[]): Area[] => {
  if (!areas) {
    return []
  }

  return areas.map((area: Fi2Area) => {
    return {
      type: area.fi2area_code,
      size: area.fi2area_value.$t + ' ' + area.fi2area_value.unit,
      status: area.fi2area_status ? area.fi2area_status.fi2class_code : '',
      measuredBy: area.fi2area_measuredby,
      measuredDate: area.fi2area_measureddate,
      measuredType: area.fi2area_measuredtype,
      derivedFrom: area.fi2area_derivedfrom,
      perimeter: area.fi2area_perimeter
        ? area.fi2area_perimeter.$t + ' ' + area.fi2area_perimeter.unit
        : '',
    }
  })
}

const getDocuments = (documents: Fi2Document[]): Document[] => {
  if (!documents) {
    return []
  }

  return documents.map((doc: Fi2Document) => {
    const className = helper.getNameFromClasslist(doc.fi2document_class)
    return {
      id: doc.fi2document_ids.fi2_id,
      description: doc.fi2document_descr.$t,
      link: doc.fi2document_link,
      className,
    }
  })
}

const transformRental = (fi2: Fi2SpatiSystem): Rental => {
  const className = helper.getNameFromClasslist(fi2.fi2spsys_class)

  const documents: Document[] = getDocuments(fi2.fi2spsys_documents)
  const areas: Area[] = getAreas(fi2.fi2spsys_area)
  const addresses: Address[] = fi2.fi2spsys_address ? fi2.fi2spsys_address.map(convertAddress) : []

  const rental: Rental = {
    type: className,
    id: fi2.id,
    guid: fi2.guid,
    changedBy: getPart(fi2.fi2spsys_value, 'ChangedBy'),
    changeDate: getPart(fi2.fi2spsys_value, 'ChangedDate'),
    createdBy: getPart(fi2.fi2spsys_value, 'CreatedBy'),
    createDate: getPart(fi2.fi2spsys_value, 'CreatedDate'),
    documents,
    areas,
    name: fi2.fi2spsys_name.$t,
    fullName: fi2.fi2spsys_fullname,
    description: fi2.fi2spsys_descr ? fi2.fi2spsys_descr.$t : '',
    addresses,
  }

  return rental
}

const transformRentals = (fiSpatiSystems: Fi2SpatiSystemsResponse): Rental[] => {
  if (fiSpatiSystems.fi2simplemessage && fiSpatiSystems.fi2simplemessage.fi2spatisystem) {
    return fiSpatiSystems.fi2simplemessage.fi2spatisystem.map(transformRental)
  } else {
    return []
  }
}

const getRentals = async (): Promise<Rental[]> => {
  const fi2SpatiSystems: Fi2SpatiSystemsResponse = await client.get({ url: `fi2spatisystem/` })
  const result = transformRentals(fi2SpatiSystems)

  return result
}

const getRental = async (id: string): Promise<Rental> => {
  const rental: Fi2SpatiSystemResponse = await client.get({ url: `fi2spatisystem/${id}` })
  const result = transformRental(rental.fi2spatisystem)

  return result
}

export const routes = (app: Application) => {
  /**
   * @swagger
   * /rentals:
   *  get:
   *    summary: Gets all rental units
   *    description: Retrieves all rental units in the system. There is currently no way of filtering or doing API-side searches.
   *    security:
   *      type: http
   *      scheme: bearer
   *      bearerFormat: JWT
   *    responses:
   *      '200':
   *        description: 'List of rental units'
   *        schema:
   *            type: array
   *            items:
   *              $ref: '#/definitions/Rental'
   *      '401':
   *        description: 'Unauthorized'
   */
  app.get(
    '/rentals',
    authMiddleware,
    asyncHandler(async (_req: Request, res: Response) => res.json(await getRentals()))
  )

  /**
   * @swagger
   * /rentals/{id}:
   *  get:
   *    summary: Gets a rental unit by id
   *    description: Retrieves a rental unit by its id
   *    security:
   *      type: http
   *      scheme: bearer
   *      bearerFormat: JWT
   *    parameters:
   *      - in: path
   *        name: id
   *        type: string
   *        required: true
   *        description: rental id
   *    responses:
   *      '200':
   *        description: 'Returns the rental unit with the specified id'
   *        schema:
   *          $ref: '#/definitions/Rental'
   *      '401':
   *        description: 'Unauthorized'
   *      '404':
   *        description: 'No rental unit with the specified id exists'
   */
  app.get(
    '/rentals/:id',
    authMiddleware,
    asyncHandler(async (_req: Request, res: Response) => res.json(await getRental(_req.params.id)))
  )
}

export default {
  getRental,
  getRentals,
}
