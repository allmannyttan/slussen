import xml2json from 'xml2json'
import axios from 'axios'
import { fastAPI } from '@app/config'
import { tokenRefresher } from './tokenHelper'
import { FastAPIRequest } from './types'

const innerGet = async <T = any>(request: FastAPIRequest) => {
  const headers = {
    'Access-Token': request.token || '',
    Accept: '*/*',
  }
  const xmlClient = axios.create({
    headers,
    baseURL: fastAPI.baseUrl,
    responseType: 'text',
  })

  const { data } = await xmlClient.get(request.url)
  const result = JSON.parse(
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

  return result
}

export const client = {
  get: tokenRefresher(innerGet),
}

export default {
  client,
}
