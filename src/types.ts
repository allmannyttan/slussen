
/********** Fi2XML types **********/

export interface Fi2SchemeNode {
  fi2scheme_id: string[],
  fi2scheme_name: string[],
  fi2scheme_url: string[],
}

export interface Fi2ClassNode {
  fi2class_code: string[],
  fi2class_scheme: Fi2SchemeNode[],
}