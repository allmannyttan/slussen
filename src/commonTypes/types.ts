export interface Address {
  guid?: string
  type?: string
  street: string
  box: string
  co: string
  attention: string
  zipCode?: string
  city?: string
  country?: string
}

export interface Fi2Address {
  guid: string
  fi2addr_class: Fi2Class
  fi2addr_descr: Fi2AddrDescr
  fi2addr_addrline: Fi2ValueUsage[]
  fi2addr_zipcode: string
  fi2addr_city: string
  fi2addr_country: string
  fi2addr_region: string
  fi2addr_tel: Fi2ValueUsage[]
}

export interface Fi2Class {
  fi2class_code: string
  fi2class_scheme: Fi2Scheme
}

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

export interface Fi2ValueUsage {
  $t: string
  usage: string
}

export interface Fi2AddrDescr {
  $t: string
  lang: string
}

export interface Fi2ParentObject {
  fi2item: string
  fi2parent_ids: {
    fi2_id: string
  }
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

export interface Fi2Ids {
  fi2_id: Fi2ValueUsage
}
