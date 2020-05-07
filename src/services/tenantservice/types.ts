import { Address, Fi2Class, Fi2Address, Fi2ValueUsage, Fi2Value } from '@app/commonTypes/types'

export interface PhoneNumber {
  type: string
  number: string
}

export interface EmailAddress {
  type: string
  address: string
}

export interface Contact {
  type: string
  firstName: string
  lastName: string
  fullName: string
  phoneNumbers?: PhoneNumber[]
  emailAddresses?: EmailAddress[]
}

export interface Tenant {
  id: string
  socialSecurityNumber?: string
  changedBy?: string
  changeDate?: string
  createdBy?: string
  createDate?: string
  name: string
  fullName: string
  phoneNumbers?: PhoneNumber[]
  emailAddresses?: EmailAddress[]
  addresses?: Address[]
  contact?: Contact
  className: string
}

/********** Fi2XML types **********/
export interface Fi2Ids {
  fi2_id: Fi2ValueUsage[]
}

export interface Fi2PartnerName {
  $t: string
  lang: string
  usage: string
}

export interface Fi2Contact {
  guid: string
  fi2contact_class: Fi2Class
  fi2cont_fname: string
  fi2cont_mname: string
  fi2cont_lname: string
  fi2cont_fullname: string
  fi2cont_tel: Fi2ValueUsage[]
  fi2cont_email: Fi2ValueUsage[]
  fi2cont_address: Fi2Address[]
}

export interface Fi2Partner {
  id: string
  xmlns?: string
  fi2part_ids: Fi2Ids
  fi2part_class: Fi2Class
  fi2part_value: Fi2Value[]
  fi2part_name: Fi2PartnerName
  fi2part_fullname: string
  fi2part_reference: string
  fi2part_tel: Fi2ValueUsage[]
  fi2part_email: Fi2ValueUsage[]
  fi2part_web: string
  fi2part_address: Fi2Address[]
  fi2part_contact: Fi2Contact
}

export interface Fi2PartnersResponse {
  fi2simplemessage: {
    fi2partner: Fi2Partner[]
  }
}

export interface Fi2PartnerResponse {
  fi2partner: Fi2Partner
}

export { Fi2Address, Address, Fi2ValueUsage }
