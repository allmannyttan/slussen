import { CaseRequest } from "@app/services/caseservice/types";

export interface FastAPIRequest {
  url: string
  token?: string
  body?: CaseRequest
}

export interface FastAPIToken {
  id: number
  token_value: string
  created: Date
}
