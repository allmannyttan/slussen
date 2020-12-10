import {
  Fi2Address,
  Address,
  Fi2Value,
  Fi2Class,
  Fi2ParentObject,
  Fi2Document,
  Fi2Ids,
} from '@app/commonTypes/types'

enum RentalType {
  Apartment = 'Apartment',
  Garage = 'Garage',
  Parking = 'Parking',
  Storage = 'Storage',
  Premises = 'Premises',
}

export interface Rental {
  type: RentalType
  id: string
  guid?: string
  changedBy: string
  changeDate: string
  createdBy: string
  createDate: string
  documents: Document[]
  areas: Area[]
  name: string
  fullName: string
  description: string
  addresses: Address[]
}

export interface Document {
  id: string
  description: string
  link: string
}

export interface Area {
  type: string
  size: string
  status: string
  measuredBy: string
  measuredDate: string
  measuredType: string
  derivedFrom: string
  perimeter: string
}

// ---
export interface Fi2ValueUsage {
  $t: string
  usage: string
}

export interface Fi2AreaStatus {
  fi2class_code: string
}

export interface Fi2Area {
  fi2area_code: string
  fi2area_value: { $t: string; unit: string }
  fi2area_status: Fi2AreaStatus
  fi2area_measuredby: string
  fi2area_measureddate: string
  fi2area_measuredtype: string
  fi2area_derivedfrom: string
  fi2area_perimeter: { $t: string; unit: string }
}

export interface Fi2SpatiSystem {
  id: string
  guid?: string
  fi2spsys_ids: Fi2Ids
  fi2spsys_class: Fi2Class
  fi2spsys_value: Fi2Value[]
  fi2spsys_documents: Fi2Document[]
  fi2spsys_name: { $t: string }
  fi2spsys_fullname: string
  fi2spsys_descr: { $t: string }
  fi2spsys_address: Fi2Address[]
  fi2spsys_area: Fi2Area[]
  fi2spsys_parentobject: Fi2ParentObject
}

export interface Fi2SpatiSystemsResponse {
  fi2simplemessage?: {
    fi2spatisystem: Fi2SpatiSystem | Fi2SpatiSystem[]
  }
}

export interface Fi2SpatiSystemResponse {
  fi2spatisystem: Fi2SpatiSystem
}

export { Fi2Value, Address, Fi2Document }
