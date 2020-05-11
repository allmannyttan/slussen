import { Application, Request, Response } from 'express'
import { client } from '@app/adapters/fastapiadapter'
import helper from '@app/helpers/fastAPIXmlListHelper'

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
    return fi2Contracts.fi2simplemessage.fi2leasecontract.map(transformContract)
  } else {
    return []
  }
}

const getLeaseContracts = async (): Promise<Contract[]> => {
  const contracts: Fi2LeaseContractsResponse = await client.get({ url: `fi2leasecontract/` })
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
   *    responses:
   *      '200':
   *        description: 'List of contracts'
   *        schema:
   *            type: array
   *            items:
   *              $ref: '#/definitions/Contract'
   */
  app.get('/leasecontracts', async (_req: Request, res: Response) =>
    res.json(await getLeaseContracts())
  )
  /**
   * @swagger
   * /leasecontracts/{id}:
   *  get:
   *    summary: Gets a contract by id
   *    description: Retrieves a lease contract by its id. Currently the only way of finding a contract for a specific tenant is to retrieve all and filter on the client side. API-side filters will be added later on.
   *    parameters:
   *      - in: path
   *        name: id
   *        type: integer
   *        required: true
   *        description: contract id
   *    responses:
   *      '200':
   *        description: 'Returns the lease contract with the specified id'
   *        schema:
   *          $ref: '#/definitions/Contract'
   *      '404':
   *        description: 'No contract with the specified id exists'
   */
  app.get('/leasecontracts/:id', async (_req: Request, res: Response) =>
    res.json(await getLeaseContract(_req.params.id))
  )
}

export default {
  getLeaseContract,
  getLeaseContracts,
}
