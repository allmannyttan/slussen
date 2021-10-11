import xml2json from 'xml2json'
import axios from 'axios'
import { fastAPI } from '@app/config'
import { tokenRefresher } from './tokenHelper'
import { FastAPIRequest } from './types'
import { CaseRequest } from '@app/services/caseservice/types'

const initXmlClient = (request: FastAPIRequest) =>  {
  const headers = {
    'Access-Token': request.token || '',
    Accept: '*/*',
  }
  return axios.create({
    headers,
    baseURL: fastAPI.baseUrl,
    responseType: 'text',
  })
}

const serializeXmlResponse = (data: string) =>
  JSON.parse(
    xml2json.toJson(data, {
      arrayNotation: [
        'fi2lease_actor',
        'fi2lease_documents',
        'fi2lease_value',
        'fi2addr_addrline',
        'fi2addr_tel',
        'fi2part_tel',
        'fi2part_email',
        'fi2part_address',
        'fi2part_value',
        'fi2_id',
        'fi2cont_tel',
        'fi2cont_email',
        'fi2spsys_area',
        'fi2spsys_address',
        'fi2spsys_value'
      ],
    })
  )

const innerGet = async <T = any>(request: FastAPIRequest) => {

  const xmlClient = initXmlClient(request)

  const { data } = await xmlClient.get(request.url)

  const result = serializeXmlResponse(data)
  return result
}

const innerPost = async <T = any>(request: FastAPIRequest) => {

  const xmlClient = initXmlClient(request)

  const { data } = await xmlClient.post(request.url, <CaseRequest>request.body)

  const result = serializeXmlResponse(data)
  return result
}



export const client = {
  get: tokenRefresher(innerGet),
  post: tokenRefresher(innerPost)
}

export default {
  client,
}
