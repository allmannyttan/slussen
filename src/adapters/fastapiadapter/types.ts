export interface FastAPIRequest {
  url: string
  token?: string
}
export interface FastAPIToken {
  id: number
  token_value: string
  created: Date
}
