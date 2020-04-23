export interface Address {
  guid: string | void
  type: string | void
  street: string
  box: string
  co: string
  attention: string
  zipCode: string | undefined
  city: string | undefined
  country: string | undefined
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