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
}

export interface ContractPartner {
  id: string
  className: string
  roleName: string
}

export interface ContractDocument {
  id: string
  description: string
  link: string
}

/********** Fi2XML types **********/

export interface Fi2Scheme {
  fi2scheme_id: string[]
  fi2scheme_name: string[]
  fi2scheme_url: string[]
}

export interface Fi2Value {
  fi2value_code: string[]
  fi2value_scheme: Fi2Scheme[]
  fi2value_value: string[]
}

export interface Fi2Class {
  fi2class_code: string[]
  fi2class_scheme: Fi2Scheme[]
}

export interface Fi2LeaseContractDescription {
  _?: string
  $: {
    lang: string
    usage: string
  }
}

export interface Fi2ValueUsage {
  _: string
  $: {
    usage: string
  }
}

export interface Fi2Ids {
  fi2_id: Fi2ValueUsage[]
}

export interface Fi2PartnerReference {
  $: {
    id: string
  }
  fi2part_ids: Fi2Ids[]
  fi2part_class: Fi2Class[]
}

export interface Fi2LeaseActor {
  fi2actor_partner: Fi2PartnerReference[]
  fi2actor_role: Fi2Class[]
}

export interface Fi2LeaseParentObject {
  $: {
    fi2item: string
  }
  fi2parent_ids: {
    fi2_id: string[]
  }[]
}

// NOTE: Detta har ej kunnat testas i Sandbox.
export interface Fi2Document {
  fi2document_ids: Fi2Ids[]
  fi2document_descr: string
  fi2document_link: string
  fi2class_code: Fi2Class[]
}

export interface Fi2LeaseContract {
  $: {
    id: string
    guid?: string
  }
  fi2lease_ids: Fi2Ids[]
  fi2lease_class: Fi2Class[]
  fi2lease_termreason: Fi2Class[]
  fi2lease_noticestatus: Fi2Class[]
  fi2lease_value: Fi2Value[]
  fi2lease_descr: Fi2LeaseContractDescription[]
  fi2lease_actor: Fi2LeaseActor[]
  fi2lease_initialdate: string[]
  fi2lease_endingdate: string[]
  fi2lease_currenddate: string[]
  fi2lease_renewaldate: string[]
  fi2lease_date: string[]
  fi2lease_signdate: string[]
  fi2lease_terminateddate: string[]
  fi2lease_noticedate: string[]
  fi2lease_noticetime: number[]
  fi2lease_parentobject: Fi2LeaseParentObject[]
  fi2lease_documents: Fi2Document[]
}

export interface Fi2LeaseContractsResponse {
  fi2simplemessage: {
    fi2leasecontract: Fi2LeaseContract[]
  }
}

export interface Fi2LeaseContractResponse {
  fi2leasecontract: Fi2LeaseContract
}
