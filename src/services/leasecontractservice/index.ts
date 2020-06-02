import { Application, Request, Response } from 'express'
import { authMiddleware } from '@app/middleware/auth'
import { client } from '@app/adapters/fastapiadapter'
import asyncHandler from 'express-async-handler'
import helper from '@app/helpers/fastAPIXmlListHelper'
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

const transformContracts = (fi2Contracts: Fi2LeaseContractsResponse): Contract[] => {
  if (fi2Contracts.fi2simplemessage && fi2Contracts.fi2simplemessage.fi2leasecontract) {
    const contracts = fi2Contracts.fi2simplemessage.fi2leasecontract.map(transformContract)

    // If there are partners in the result, implant them as tenants in the right contracts
    if (fi2Contracts.fi2simplemessage.fi2partner) {
      const tenants = fi2Contracts.fi2simplemessage.fi2partner.map(tenantService.transformTenant)
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
    if (fi2Contracts.fi2simplemessage.fi2spatisystem) {
      const rentals = fi2Contracts.fi2simplemessage.fi2spatisystem.map(
        rentalService.transformRental
      )
      const rentalsById: { [id: string]: Rental } = {}

      for (const rental of rentals) {
        rentalsById[rental.id] = rental
      }

      for (const contract of contracts) {
        contract.rentalObject.rental = rentalsById[contract.rentalObject.id]
      }
    }

    return contracts
  } else {
    return []
  }
}

/**
 * Creates a query string for fastAPI from a number of parameters.
 */
const createQueryString = (
  rentalid?: string,
  includeExpired?: boolean,
  includeTenants?: boolean,
  includeRentals?: boolean
): string => {
  const filter = []
  const include = []
  const querystring = []

  querystring.push(`limit=${fastAPI.limit}`)

  if (rentalid) {
    filter.push(`fi2lease_parentobject@fi2spatisystem.fi2parent_ids.fi2_id:'${rentalid}'`)
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
    return '?' + querystring.join('&')
  } else {
    return ''
  }
}

const getLeaseContracts = async (
  rentalId?: string,
  includeExpired?: boolean,
  includeTentants?: boolean,
  includeRentals?: boolean
): Promise<Contract[]> => {
  const querystring = createQueryString(rentalId, includeExpired, includeTentants, includeRentals)
  const contracts: Fi2LeaseContractsResponse = await client.get({
    url: `fi2leasecontract/${querystring}`,
  })
  const result = transformContracts(contracts)
  return result
}

const getLeaseContract = async (id: string): Promise<Contract> => {
  const fi2Contract: Fi2LeaseContractResponse = await client.get({ url: `fi2leasecontract/${id}` })

  const result = transformContract(fi2Contract.fi2leasecontract)
  return result
}

export const routes = (app: Application) => {
  /**
   * @swagger
   * /leasecontracts:
   *  get:
   *    summary: Gets all contracts for rentals
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
   *        description: "If true, expired lease contracts are included in results"
   *        default: false
   *      - in: query
   *        name: includetenants
   *        required: false
   *        description: "If true, the full tenant (partner) objects are included as subobjects in each contract"
   *        default: false
   *      - in: header
   *        name: authorization
   *        schema:
   *          type: string
   *        required: true
   *    security:
   *      bearerAuth: []
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
          /true/i.test(_req.query.includerentals as string)
        )
      )
    )
  )

  /**
   * @swagger
   * /leasecontracts/{id}:
   *  get:
   *    summary: Gets a contract by id
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
   *      bearerAuth: []
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
