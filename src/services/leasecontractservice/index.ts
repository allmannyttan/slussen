import { Application, Request, Response } from 'express'
import { authMiddleware } from '@app/middleware/auth'
import { client } from '@app/adapters/fastapiadapter'
import asyncHandler from 'express-async-handler'
import helper from '@app/helpers/fastAPIXmlListHelper'
import logger from '@app/helpers/logger'
import moment from 'moment'
import tenantService from '@app/services/tenantservice'
import rentalService from '@app/services/rentalservice'
import { fastAPI } from '@app/config'

import {
  Contract,
  ContractPartner,
  ContractDocument,
  Fi2LeaseContract,
  Fi2LeaseContractResponse,
  Fi2LeaseContractsResponse,
  Fi2Value,
  Fi2LeaseActor,
  Fi2Document,
  Fi2ParentObject,
  ContractRentalObject,
  RentalType,
  Tenant,
  Rental,
} from './types'

const getPart = (parts: Fi2Value[], partName: string): string => {
  const partNode = parts.filter((part: Fi2Value) => part.fi2value_code === partName)

  return partNode.length > 0 ? partNode[0].fi2value_value : ''
}

const getPartners = (partners: Fi2LeaseActor[]): ContractPartner[] => {
  if (!partners) {
    return []
  }

  const contractPartners: ContractPartner[] = partners.map((partner: Fi2LeaseActor) => {
    return {
      id: partner.fi2actor_partner.id,
      className: helper.getNameFromClasslist(partner.fi2actor_partner.fi2part_class),
      roleName: helper.getNameFromClasslist(partner.fi2actor_role),
    }
  })

  return contractPartners
}

const getDocuments = (documents: Fi2Document[]): ContractDocument[] => {
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

const getContractRentals = (parentObject: Fi2ParentObject): ContractRentalObject => {
  return {
    id: parentObject.fi2parent_ids.fi2_id,
    type: parentObject.fi2item === 'fi2spatisystem' ? RentalType.Rental : RentalType.Unknown,
  }
}

const transformContract = (fi2: Fi2LeaseContract): Contract => {
  const className = helper.getNameFromClasslist(fi2.fi2lease_class)
  let terminationReason = ''
  if (fi2.fi2lease_termreason)
    terminationReason = helper.getNameFromClasslist(fi2.fi2lease_termreason)

  let noticeStatus = ''
  if (fi2.fi2lease_noticestatus)
    noticeStatus = helper.getNameFromClasslist(fi2.fi2lease_noticestatus)

  const partners: ContractPartner[] = getPartners(fi2.fi2lease_actor)
  const documents: ContractDocument[] = getDocuments(fi2.fi2lease_documents)
  const rentalObject: ContractRentalObject = getContractRentals(fi2.fi2lease_parentobject)

  const contract: Contract = {
    id: fi2.id,
    guid: fi2.guid,
    className,
    noticeStatus,
    terminationReason,

    currentEndDate: fi2.fi2lease_currenddate || '',
    date: fi2.fi2lease_date || '',
    endingDate: fi2.fi2lease_endingdate || '',
    initialDate: fi2.fi2lease_initialdate || '',
    noticeDate: fi2.fi2lease_noticedate || '',
    renewalDate: fi2.fi2lease_renewaldate || '',
    signDate: fi2.fi2lease_signdate || '',
    terminatedDate: fi2.fi2lease_terminateddate || '',

    description:
      fi2.fi2lease_descr && fi2.fi2lease_descr && fi2.fi2lease_descr.$t
        ? fi2.fi2lease_descr.$t
        : '',
    noticeTime: fi2.fi2lease_noticetime ? fi2.fi2lease_noticetime : 0,

    changedBy: getPart(fi2.fi2lease_value, 'ChangedBy'),
    changeDate: getPart(fi2.fi2lease_value, 'ChangedDate'),
    createdBy: getPart(fi2.fi2lease_value, 'CreatedBy'),
    createDate: getPart(fi2.fi2lease_value, 'CreatedDate'),
    noticedBy: getPart(fi2.fi2lease_value, 'NoticedBy'),

    partners,
    documents,
    rentalObject,
  }

  return contract
}

const transformContracts = ({ fi2simplemessage }: Fi2LeaseContractsResponse, includeExpired?: boolean): Contract[] => {
  if (!fi2simplemessage?.fi2leasecontract) {
    return []
  }

  const { fi2leasecontract, fi2partner, fi2spatisystem } = fi2simplemessage

  let contracts =
    'id' in fi2leasecontract
      ? [transformContract(fi2leasecontract)]
      : fi2leasecontract.map(transformContract)

  if (!includeExpired) {
    // Filter out contracts that have endingdate set if that date has passed
    contracts = contracts.filter((contract: Contract) => {
      return !contract.endingDate || moment(contract.endingDate).isAfter(moment())
    })
  }

  // If there are partners in the result, implant them as tenants in the right contracts
  if (fi2partner) {
    const tenants =
      'id' in fi2partner
        ? [tenantService.transformTenant(fi2partner)]
        : fi2partner.map(tenantService.transformTenant)

    const tenantsById: { [id: string]: Tenant } = {}

    for (const tenant of tenants) {
      tenantsById[tenant.id] = tenant
    }

    for (const contract of contracts) {
      for (const partner of contract.partners) {
        partner.tenant = tenantsById[partner.id]
      }
    }
  }

  // If there are spatisystems in the result, implant them as rentals in the right contracts
  if (fi2spatisystem) {
    const rentals = ('id' in fi2spatisystem
      ? [rentalService.transformRental(fi2spatisystem)]
      : fi2spatisystem.map(rentalService.transformRental)
    )

    //rentals = rentals.filter((rental) => rental.type === 'Lägenhet')

    if (!rentals.length) {
      return []
    }

    const rentalsById: { [id: string]: Rental } = {}

    for (const rental of rentals) {
      rentalsById[rental.id] = rental
    }

    for (const contract of contracts) {
      contract.rentalObject.rental = rentalsById[contract.rentalObject.id]
    }

    logger.debug('Contracts before filter ' + contracts.length)

    contracts = contracts.filter((contract) => contract.rentalObject.rental && contract.rentalObject.rental.type === 'Lägenhet')

    logger.debug('Contracts after filter ' + contracts.length)
  }

  return contracts
}

/**
 * Creates a query string for fastAPI from a number of parameters.
 */
const createQueryString = (
  rentalid?: string,
  includeExpired?: boolean,
  includeTenants?: boolean,
  includeRentals?: boolean,
  limit?: number,
  offset?: number,
  from?: Date,
  to?: Date
): string => {
  const filter = []
  const include = []
  const querystring = []

  querystring.push(`limit=${limit ?? fastAPI.limit}`)

  if (offset !== undefined) {
    querystring.push(`offset=${offset}`)
  }

  if (rentalid) {
    filter.push(`fi2lease_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'${rentalid}'`)
  }

  if (from) {
    const f = moment(from).format('YYYY-MM-DD')
    filter.push(`fi2lease_initialdate>:'${f}'`)
  } else {
    const f = moment().format('YYYY-MM-DD')
    filter.push(`fi2lease_initialdate<:'${f}'`)
  }

  if (to) {
    const t = moment(to).format('YYYY-MM-DD')
    filter.push(`fi2lease_initialdate<:'${t}'`)
  }

  if (!includeExpired) {
    const today = moment().format('YYYY-MM-DD')
    filter.push(`fi2lease_currenddate>'${today}'`)
  }

  if (includeTenants) {
    include.push('fi2partner')
  }

  if (includeRentals) {
    include.push('fi2spatisystem')
  }

  if (include.length > 0) {
    querystring.push('include=' + include.join(','))
  }

  if (filter.length > 0) {
    querystring.push('filter=' + filter.join(';'))
  }

  if (querystring.length > 0) {
    logger.debug('/leasecontracts querystring' + querystring.join('&'))
    return '?' + querystring.join('&')
  } else {
    return ''
  }
}

const getLeaseContracts = async (
  rentalId?: string,
  includeExpired?: boolean,
  includeTentants?: boolean,
  includeRentals?: boolean,
  limit?: number,
  offset?: number,
  from?: Date,
  to?: Date
): Promise<Contract[]> => {
  try {
    const querystring = createQueryString(
      rentalId,
      includeExpired,
      includeTentants,
      includeRentals,
      limit,
      offset,
      from,
      to
    )

    const contracts: Fi2LeaseContractsResponse = await client.get({
      url: `fi2leasecontract/${querystring}`,
    })

    const result = transformContracts(contracts, includeExpired)
    logger.debug('/leasecontracts retrieved ' + result.length + ' contracts')
    return result
  } catch (err) {
    throw new Error(err)
  }
}

const getLeaseContract = async (id: string): Promise<Contract> => {
  try {
    const fi2Contract: Fi2LeaseContractResponse = await client.get({
      url: `fi2leasecontract/${id}`,
    })

    const result = transformContract(fi2Contract.fi2leasecontract)
    return result
  } catch (err) {
    throw new Error(err)
  }
}

export const routes = (app: Application) => {
  /**
   * @swagger
   * tags:
   *   name: Lease contracts
   */

  /**
   * @swagger
   * /leasecontracts:
   *  get:
   *    summary: Gets all contracts for rentals
   *    tags: [Lease contracts]
   *    description: Retrieves all lease contracts for rentals in the system. Currently the only way of finding a contract for a specific tenant is to retrieve all and filter on the client side. API-side filters will be added later on.
   *    parameters:
   *      - in: query
   *        name: rentalid
   *        description: "Filter for rental IDs, supports simple wildcards (example: rentalid=11*)."
   *        required: false
   *        type: string
   *      - in: query
   *        name: includeexpired
   *        required: false
   *        description: "If true, expired lease contracts are included in results. Will be ignored if 'From' and/or 'To' is given"
   *        default: false
   *      - in: query
   *        name: includetenants
   *        required: false
   *        description: "If true, the full tenant (partner) objects are included as subobjects in each contract"
   *        default: false
   *      - in: query
   *        name: offset
   *        schema:
   *          type: integer
   *        description: The number of items to skip before starting to collect the result set
   *        required: false
   *      - in: query
   *        name: limit
   *        schema:
   *          type: integer
   *        description: The number of items to return
   *        required: false
   *      - in: query
   *        name: from
   *        schema:
   *          type: date
   *        description: Get contracts valid on given date. Use with "To" to recieve contracts valid between dates
   *        required: false
   *      - in: query
   *        name: to
   *        schema:
   *          type: date
   *        description: Get contracts valid on given date. Use with "From" to recieve contracts valid between dates
   *        required: false
   *      - in: header
   *        name: authorization
   *        schema:
   *          type: string
   *        required: true
   *    security:
   *      - bearerAuth: []
   *    responses:
   *      '200':
   *        description: 'List of contracts'
   *        content:
   *          application/json:
   *            schema:
   *              type: array
   *              items:
   *                $ref: '#/components/schemas/Contract'
   *      '401':
   *        description: 'Unauthorized'
   */
  app.get(
    '/leasecontracts',
    authMiddleware,
    asyncHandler(async (_req: Request, res: Response) =>
      res.json(
        await getLeaseContracts(
          _req.query.rentalid as string,
          /true/i.test(_req.query.includeexpired as string),
          /true/i.test(_req.query.includetenants as string),
          /true/i.test(_req.query.includerentals as string),
          typeof _req.query.limit === 'string' ? parseInt(_req.query.limit) : undefined,
          typeof _req.query.offset === 'string' ? parseInt(_req.query.offset) : undefined,
          typeof _req.query.from === 'string' ? new Date(_req.query.from) : undefined,
          typeof _req.query.to === 'string' ? new Date(_req.query.to) : undefined
        )
      )
    )
  )

  /**
   * @swagger
   * /leasecontracts/{id}:
   *  get:
   *    summary: Gets a contract by id
   *    tags: [Lease contracts]
   *    description: Retrieves a lease contract by its id. Currently the only way of finding a contract for a specific tenant is to retrieve all and filter on the client side. API-side filters will be added later on.
   *    parameters:
   *      - in: header
   *        name: authorization
   *        schema:
   *          type: string
   *        required: true
   *      - in: path
   *        name: id
   *        type: integer
   *        required: true
   *        description: contract id
   *    security:
   *      - bearerAuth: []
   *    responses:
   *      '200':
   *        description: 'Returns the lease contract with the specified id'
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/Contract'
   *      '401':
   *        description: 'Unauthorized'
   *      '404':
   *        description: 'No contract with the specified id exists'
   */
  app.get(
    '/leasecontracts/:id',
    authMiddleware,
    asyncHandler(async (_req: Request, res: Response) =>
      res.json(await getLeaseContract(_req.params.id))
    )
  )
}

export default {
  getLeaseContract,
  getLeaseContracts,
}
