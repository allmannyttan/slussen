import { Fi2Value, Fi2Class, Fi2ParentObject, Fi2Document, Fi2Ids, Fi2Partner } from '@app/commonTypes/types';
import { Tenant } from '@app/services/tenantservice/types'
import { Rental, Fi2SpatiSystem } from '@app/services/rentalservice/types';

export interface Contract {
  id: string
  guid?: string

  currentEndDate: string
  changedBy: string
  changeDate: string
  className: string
  createdBy: string
  createDate: string
  date: string
  description: string
  endingDate: string
  initialDate: string
  noticedBy: string
  noticeStatus: string
  noticeDate: string
  noticeTime: number
  renewalDate: string
  signDate: string
  terminatedDate: string
  terminationReason: string
  partners: ContractPartner[]
  documents: ContractDocument[]
  rentalObject: ContractRentalObject
}

export interface ContractPartner {
  id: string
  className: string
  roleName: string
  tenant?: Tenant
}

export interface ContractDocument {
  id: string
  description: string
  link: string
}

export interface ContractRentalObject {
  type: RentalType
  id: string
  rental?: Rental
}

export enum RentalType {
  Rental = 'Rental',
  Unknown = 'Unknown',
}

/********** Fi2XML types **********/
export interface Fi2LeaseContractDescription {
  $t: string
  lang: string
  usage?: string
}

export interface Fi2PartnerReference {
  id: string
  fi2part_ids: Fi2Ids
  fi2part_class: Fi2Class
}

export interface Fi2LeaseActor {
  fi2actor_partner: Fi2PartnerReference
  fi2actor_role: Fi2Class
}

export interface Fi2LeaseContract {
  id: string
  guid?: string
  fi2lease_ids: Fi2Ids
  fi2lease_class: Fi2Class
  fi2lease_termreason: Fi2Class
  fi2lease_noticestatus: Fi2Class
  fi2lease_value: Fi2Value[]
  fi2lease_descr: Fi2LeaseContractDescription
  fi2lease_actor: Fi2LeaseActor[]
  fi2lease_initialdate: string
  fi2lease_endingdate: string
  fi2lease_currenddate: string
  fi2lease_renewaldate: string
  fi2lease_date: string
  fi2lease_signdate: string
  fi2lease_terminateddate: string
  fi2lease_noticedate: string
  fi2lease_noticetime: number
  fi2lease_parentobject: Fi2ParentObject
  fi2lease_documents: Fi2Document[]
}

export interface Fi2LeaseContractsResponse {
  fi2simplemessage: {
    fi2leasecontract: Fi2LeaseContract[]
    fi2partner: Fi2Partner[]
    fi2spatisystem: Fi2SpatiSystem[]
  }
}

export interface Fi2LeaseContractResponse {
  fi2leasecontract: Fi2LeaseContract
}

export { Fi2Value, Fi2Document, Fi2ParentObject, Tenant, Rental }