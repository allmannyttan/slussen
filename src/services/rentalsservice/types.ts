import { Fi2Address, Address } from "../tenantservice/types";

export interface Rental {
  type: string
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

export interface Fi2Scheme {
  fi2scheme_id: string
  fi2scheme_name: string
  fi2scheme_url: string
}

export interface Fi2Value {
  fi2value_code: string
  fi2value_scheme: Fi2Scheme
  fi2value_value: string
}

export interface Fi2Class {
  fi2class_code: string
  fi2class_scheme: Fi2Scheme
}

export interface Fi2ValueUsage {
  $t: string
  usage: string
}
  
export interface Fi2Ids {
  fi2_id: Fi2ValueUsage
}

export interface Fi2DocumentIds {
  fi2_id: string
}

// NOTE: Detta har ej kunnat testas i Sandbox.
export interface Fi2Document {
  fi2document_ids: Fi2DocumentIds
  fi2document_descr: { $t: string }
  fi2document_link: string
  fi2document_class: Fi2Class
}

export interface Fi2AreaStatus {
  fi2class_code: string
}

export interface Fi2Area {
  fi2area_code: string
  fi2area_value: { $t: string, unit: string }
  fi2area_status: Fi2AreaStatus
  fi2area_measuredby: string
  fi2area_measureddate: string
  fi2area_measuredtype: string
  fi2area_derivedfrom: string
  fi2area_perimeter: { $t: string, unit: string }
}

export interface Fi2ParentObject {
  fi2item: string
  fi2parent_ids: {
    fi2_id: string
  }
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
  fi2simplemessage: {
    fi2spatisystem: Fi2SpatiSystem[]
  }
}
  
export interface Fi2SpatiSystemResponse {
  fi2rental: Fi2SpatiSystem
}