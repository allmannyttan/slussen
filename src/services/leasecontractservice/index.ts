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
} from './types'

const getFirstDate = (dates: string[]): string => (dates && dates.length > 0 ? dates[0] : '')

const getPart = (parts: Fi2Value[], partName: string): string => {
  const partNode = parts.filter((part: Fi2Value) => part.fi2value_code[0] === partName)

  return partNode.length > 0 ? partNode[0].fi2value_value[0] : ''
}

const getPartners = async (partners: Fi2LeaseActor[]): Promise<ContractPartner[]> => {
  const contractPartners: Promise<ContractPartner[]> = Promise.all(
    partners.map(async (partner) => {
      return {
        id: partner.fi2actor_partner[0].$.id,
        className: await helper.getNameFromClasslist(partner.fi2actor_partner[0].fi2part_class[0]),
        roleName: await helper.getNameFromClasslist(partner.fi2actor_role[0]),
      }
    })
  )
  return contractPartners
}

const getDocuments = (documents: Fi2Document[]): ContractDocument[] => {
  return documents.map((doc: Fi2Document) => {
    return {
      id: doc.fi2document_ids[0].fi2_id[0]._,
      description: doc.fi2document_descr[0],
      link: doc.fi2document_link[0],
    }
  })
}

const transformContract = async (fi2: Fi2LeaseContract): Promise<Contract> => {
  const className = await helper.getNameFromClasslist(fi2.fi2lease_class[0])
  let terminationReason = ''
  if (fi2.fi2lease_termreason)
    terminationReason = await helper.getNameFromClasslist(fi2.fi2lease_termreason[0])

  let noticeStatus = ''
  if (fi2.fi2lease_noticestatus)
    noticeStatus = await helper.getNameFromClasslist(fi2.fi2lease_noticestatus[0])

  const partners: ContractPartner[] = await getPartners(fi2.fi2lease_actor)
  const documents: ContractDocument[] = await getDocuments(fi2.fi2lease_documents)

  const contract: Contract = {
    id: fi2.$.id,
    guid: fi2.$.guid,
    className,
    noticeStatus,
    terminationReason,

    currentEndDate: getFirstDate(fi2.fi2lease_currenddate),
    date: getFirstDate(fi2.fi2lease_date),
    endingDate: getFirstDate(fi2.fi2lease_endingdate),
    initialDate: getFirstDate(fi2.fi2lease_initialdate),
    noticeDate: getFirstDate(fi2.fi2lease_noticedate),
    renewalDate: getFirstDate(fi2.fi2lease_renewaldate),
    signDate: getFirstDate(fi2.fi2lease_signdate),
    terminatedDate: getFirstDate(fi2.fi2lease_terminateddate),

    noticeTime: fi2.fi2lease_noticetime[0],

    changedBy: getPart(fi2.fi2lease_value, 'ChangedBy'),
    changeDate: getPart(fi2.fi2lease_value, 'ChangedDate'),
    createdBy: getPart(fi2.fi2lease_value, 'CreatedBy'),
    createDate: getPart(fi2.fi2lease_value, 'CreatedDate'),
    noticedBy: getPart(fi2.fi2lease_value, 'NoticedBy'),

    partners,
    documents,
  }

  return contract
}

const transformContracts = async (fi2Contracts: Fi2LeaseContractsResponse): Promise<Contract[]> => {
  if (fi2Contracts.fi2simplemessage && fi2Contracts.fi2simplemessage.fi2leasecontract) {
    return Promise.all(fi2Contracts.fi2simplemessage.fi2leasecontract.map(transformContract))
  } else {
    return []
  }
}

const getLeaseContracts = async (): Promise<Contract[]> => {
  const contracts: Fi2LeaseContractsResponse = await client.get(`fi2leasecontract/`)
  const result = await transformContracts(contracts)
  return result
}

const getLeaseContract = async (id: string): Promise<Contract> => {
  const fi2Contract: Fi2LeaseContractResponse = await client.get(`fi2leasecontract/${id}`)
  const result = await transformContract(fi2Contract.fi2leasecontract)
  return result
}

export const routes = (app: Application) => {
  app.get('/leasecontracts', async (_req: Request, res: Response) =>
    res.json(await getLeaseContracts())
  )
  app.get('/leasecontracts/:id', async (_req: Request, res: Response) =>
    res.json(await getLeaseContract(_req.params.id))
  )
}
