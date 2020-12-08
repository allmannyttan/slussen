import { Application, Request, Response } from 'express'
import { client } from '@app/adapters/fastapiadapter'
import { convertAddress } from '@app/helpers/converters'
import { Fi2Value, Fi2ValueUsage, Fi2Contact } from '@app/commonTypes/types'
import asyncHandler from 'express-async-handler'
import helper from '@app/helpers/fastAPIXmlListHelper'

import {
  Contact,
  EmailAddress,
  Fi2Ids,
  Fi2Partner,
  Fi2PartnersResponse,
  PhoneNumber,
  Tenant,
  Fi2PartnerResponse,
} from './types'
import { authMiddleware } from '@app/middleware/auth'
import { fastAPI } from '@app/config'

const getSocialSecurityNumber = (ids: Fi2Ids): string => {
  const ssnNode = ids.fi2_id.filter((id: Fi2ValueUsage) => id.usage === 'Ssn')

  return ssnNode.length > 0 ? ssnNode[0].$t : ''
}

const getPart = (parts: Fi2Value[], partName: string): string => {
  const partNode = parts.filter((part: Fi2Value) => part.fi2value_code === partName)

  return partNode.length > 0 ? partNode[0].fi2value_value : ''
}

const getPhoneNumbers = (phoneNumbers: Fi2ValueUsage[]): PhoneNumber[] => {
  if (!phoneNumbers) {
    return []
  }

  const transformedPhoneNumbers: PhoneNumber[] = phoneNumbers
    .map(
      (phoneNumber: Fi2ValueUsage): PhoneNumber => {
        return {
          type: phoneNumber.usage,
          number: phoneNumber.$t,
        }
      }
    )
    .filter((phoneNumber: PhoneNumber) => phoneNumber.number !== null)

  return transformedPhoneNumbers
}

const getEmailAddresses = (emailAddresses: Fi2ValueUsage[]): EmailAddress[] => {
  if (!emailAddresses) {
    return []
  }

  const transformedEmailAddresses: EmailAddress[] = emailAddresses
    .map(
      (emailAddress: Fi2ValueUsage): EmailAddress => {
        return {
          type: emailAddress.usage,
          address: emailAddress.$t,
        }
      }
    )
    .filter((email: EmailAddress) => email.address !== null)

  return transformedEmailAddresses
}

const transformContact = (fi2Contact: Fi2Contact): Contact | undefined => {
  if (fi2Contact) {
    return {
      type: fi2Contact.fi2contact_class.fi2class_code,
      firstName: fi2Contact.fi2cont_fname,
      lastName: fi2Contact.fi2cont_lname,
      fullName: fi2Contact.fi2cont_fullname,
      phoneNumbers: getPhoneNumbers(fi2Contact.fi2cont_tel),
      emailAddresses: getEmailAddresses(fi2Contact.fi2cont_email),
    }
  } else {
    return undefined
  }
}

const transformTenant = (tenantRaw: Fi2Partner): Tenant => {
  const className = helper.getNameFromClasslist(tenantRaw.fi2part_class)
  const tenant: Tenant = {
    id: tenantRaw.id,
    socialSecurityNumber: getSocialSecurityNumber(tenantRaw.fi2part_ids),
    changedBy: getPart(tenantRaw.fi2part_value, 'ChangedBy'),
    changeDate: getPart(tenantRaw.fi2part_value, 'ChangedDate'),
    createdBy: getPart(tenantRaw.fi2part_value, 'CreatedBy'),
    createDate: getPart(tenantRaw.fi2part_value, 'CreatedDate'),
    name: tenantRaw.fi2part_name ? tenantRaw.fi2part_name.$t : '',
    fullName: tenantRaw.fi2part_fullname,
    phoneNumbers: getPhoneNumbers(tenantRaw.fi2part_tel),
    emailAddresses: getEmailAddresses(tenantRaw.fi2part_email),
    addresses: tenantRaw.fi2part_address
      ? tenantRaw.fi2part_address.map(convertAddress)
      : undefined,
    contact: transformContact(tenantRaw.fi2part_contact),
    className,
  }

  return tenant
}

const transformTenants = (fi2Tenants: Fi2Partner[]): Tenant[] => {
  return fi2Tenants.map(transformTenant)
}

const getTenants = async (limit?: number, offset?: number): Promise<Tenant[]> => {
  try {
    const result: Fi2PartnersResponse = await client.get({
      url: `fi2partner?filter=fi2part_class.fi2class_code:'16'&limit=${limit ?? fastAPI.limit}${
        offset !== undefined ? `&offset=${offset}` : ''
      }`,
    })

    if (!result.fi2simplemessage?.fi2partner) {
      return []
    }

    if ('id' in result.fi2simplemessage.fi2partner) {
      return transformTenants([result.fi2simplemessage.fi2partner])
    }

    return transformTenants(result.fi2simplemessage.fi2partner)
  } catch (err) {
    throw new Error(err)
  }
}

const getTenant = async (id: string): Promise<Tenant> => {
  try {
    const tenant: Fi2PartnerResponse = await client.get({ url: `fi2partner/${id}` })
    const result = transformTenant(tenant.fi2partner)
    return result
  } catch (err) {
    throw new Error(err)
  }
}

export const routes = (app: Application) => {
  /**
   * @swagger
   * tags:
   *   name: Tenants
   */

  /**
   * @swagger
   * /tenants:
   *  get:
   *    summary: Gets all tenants
   *    tags: [Tenants]
   *    description: Retrieves all tenants in the system. There is currently no way of filtering or doing API-side searches.
   *    parameters:
   *      - in: header
   *        name: authorization
   *        schema:
   *          type: string
   *        required: true
   *      - in: query
   *        name: offset
   *        schema:
   *          type: integer
   *        description: The number of items to skip before starting to collect the result set
   *      - in: query
   *        name: limit
   *        schema:
   *          type: integer
   *        description: The number of items to return
   *    security:
   *      - BearerAuth:
   *          type: http
   *          scheme: bearer
   *          bearerFormat: JWT
   *    responses:
   *      '200':
   *        description: 'List of tenants'
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/definitions/Tenant'
   *      '401':
   *        description: 'Unauthorized'
   */
  app.get(
    '/tenants',
    authMiddleware,
    asyncHandler(async (req: Request, res: Response) =>
      res.json(
        await getTenants(
          typeof req.query.limit === 'string' ? parseInt(req.query.limit) : undefined,
          typeof req.query.offset === 'string' ? parseInt(req.query.offset) : undefined
        )
      )
    )
  ),
    /**
     * @swagger
     * /tenants/{id}:
     *  get:
     *    summary: Gets a tenant by id
     *    tags: [Tenants]
     *    description: Retrieves a tenant by its id
     *    security:
     *      - BearerAuth:
     *          type: http
     *          scheme: bearer
     *          bearerFormat: JWT
     *    parameters:
     *      - in: header
     *        name: authorization
     *        schema:
     *          type: string
     *        required: true
     *      - in: path
     *        name: id
     *        type: string
     *        required: true
     *        description: tenant id
     *    responses:
     *      '200':
     *        description: 'Returns the tenant with the specified id'
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/definitions/Tenant'
     *      '401':
     *        description: 'Unauthorized'
     *      '404':
     *        description: 'No tenant with the specified id exists'
     */
    app.get(
      '/tenants/:id',
      authMiddleware,
      asyncHandler(async (_req: Request, res: Response) =>
        res.json(await getTenant(_req.params.id))
      )
    )
}

export default {
  getTenants,
  getTenant,
  transformTenant,
}
