import { Address, Fi2Partner, Fi2Address, Fi2ValueUsage, Fi2Ids } from '@app/commonTypes/types'

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
export interface Fi2PartnersResponse {
  fi2simplemessage: {
    fi2partner: Fi2Partner[]
  }
}

export interface Fi2PartnerResponse {
  fi2partner: Fi2Partner
}

export { Fi2Address, Address, Fi2ValueUsage, Fi2Partner, Fi2Ids }
