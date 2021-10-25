export interface FastAPIRequest {
  url: string
  token?: string,
  skipXmlSerialization?: boolean
}
export interface FastAPIToken {
  id: number
  token_value: string
  created: Date
}
