import {
  // Fi2Ids
  Fi2Value
} from '@app/commonTypes/types'


export interface Case {
  id: string,
  registrationDate: string
  registrar: string

  status: string
  description: string
  comment: string

  createdDate: string
  changedDate: string

  // TODO: This can be 'Script' and what else?
  createdBy: string
  changedBy: string 
}

export interface CaseRequest {
  summary: string
}

/********** Fi2XML types **********/
export interface Fi2Case {
  id: string
  fi2case_registrar: string | undefined
  fi2case_registrationdate: string | undefined
  fi2case_status: Fi2CaseStatus
  fi2case_descr: Fi2CaseDescription[]
  fi2case_value: Fi2Value[]
}
export interface Fi2CaseStatus {
  fi2class_code: string
}

export interface Fi2CaseDescription {
  lang: string
  $t: string
  usage: string
}

export interface Fi2CasesResponse {
  fi2simplemessage: {
    fi2case: Fi2Case[]
  }
}
