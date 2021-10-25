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

enum CategoryType {
  // TODO: find actual values
  e = "Electronic",
  CASE = 'Case'
}


// http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml
enum StatusType {
  CREATED = 'Created',
  PENDING = 'Pending',
  ANNULLED = 'Annulled',
  COMPLETED = 'Completed'
}

// Created	Skapad	
// Pending	Pågående	
// Annulled	Annullerad	
// Completed	Avslutad

export interface CaseRequest {
  id: string
  title: string
  description: string
  category: CategoryType
  status: StatusType
}

export type CaseRequestInput = CaseRequest & {
  id?: string
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
