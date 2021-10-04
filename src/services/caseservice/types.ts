import { Fi2Value, Fi2ValueUsage } from '@app/commonTypes/types'

export interface Case {
  id: string
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

// http://www.fastapi.se/lists/classlist/Class_Fi2CaseStatus_01.xml
export enum StatusType {
  CREATED = 'Created',
  PENDING = 'Pending',
  ANNULLED = 'Annulled',
  COMPLETED = 'Completed',
}

export interface CaseCreateRequest {
  rentalId: string
  comment?: string
  description: string
}

export type CaseUpdateRequest = Partial<Omit<CaseCreateRequest, 'rentalId'>>

/********** Fi2XML types **********/
export interface Fi2Case {
  id: string
  fi2case_registrar: string | undefined
  fi2case_registrationdate: string | undefined
  fi2case_status: Fi2CaseStatus
  fi2case_descr: Fi2ValueUsage[] | Fi2ValueUsage
  fi2case_value: Fi2Value[]
}
export interface Fi2CaseStatus {
  fi2class_code: string
}

export interface Fi2CaseResponse {
  fi2case: Fi2Case
}

export interface Fi2CasesResponse {
  fi2simplemessage: {
    fi2case: Fi2Case[]
  }
}
