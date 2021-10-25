import xml2json from 'xml2json'
import axios, { AxiosError, AxiosInstance } from 'axios'
import { fastAPI } from '@app/config'
import { tokenRefresher } from './tokenHelper'
import { FastAPIRequest } from './types'

const initXmlClient = (request: FastAPIRequest): AxiosInstance =>  {
  const headers = {
    'Access-Token': request.token || '',
    Accept: 'application/xml; charset=utf-8',
    'Content-Type': 'application/xml; charset=utf-8',
  }
  return axios.create({
    headers,
    baseURL: fastAPI.baseUrl,
    responseType: 'text',
  })
}

const serializeXmlResponse = (data: string): object =>
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
        'fi2spsys_value',
        'fi2case_value'
      ],
    }))


const innerGet = async (request: FastAPIRequest) => {
  const xmlClient = initXmlClient(request)

  const { data } = await xmlClient.get(request.url)

  if (request.skipXmlSerialization) return data

  const result = serializeXmlResponse(data)
  return result
}

const innerPost = async (request: FastAPIRequest, xml?: string) => {
  const xmlClient = initXmlClient(request)

  try {
    const { data } = await xmlClient.post(request.url, xml)
    return serializeXmlResponse(data)
  } catch (error) {
    const { response } = <AxiosError>error
    return serializeXmlResponse(response?.data)
  }
}


const innerPut = async (request: FastAPIRequest, xml?: string) => {
  const xmlClient = initXmlClient(request)
  try {
    const { data } = await xmlClient.put(request.url, xml)
    return serializeXmlResponse(data)
  } catch (error) {
    const { response } = <AxiosError>error
    return serializeXmlResponse(response?.data)
  }
}

export const client = {
  get: tokenRefresher(innerGet),
  post: tokenRefresher(innerPost),
  put: tokenRefresher(innerPut)
}

export default {
  client,
}
