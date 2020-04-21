import xml2json from 'xml2json'
import axios from 'axios'
import { fastAPI } from '@app/config'

const headers = {
  'Access-Token': fastAPI.accessToken,
  Accept: '*/*',
}

export const client = {
  get: async <T = any>(url: string, options: Partial<any> = {}) => {
    const xmlClient = axios.create({
      headers,
      baseURL: fastAPI.baseUrl,
      responseType: 'text',
    })
    try {
      const { data }: { data: T } = await xmlClient.get(url, options)
      const result = JSON.parse(
        xml2json.toJson(data, {
          arrayNotation: ['fi2lease_actor', 'fi2lease_documents', 'fi2lease_value'],
        })
      )
      console.log(JSON.stringify(result, null, 2))

      return result
    } catch (error) {
      console.error(error)
    }
  },

  /*
  post: async <T = any>(url: string) => {
    const { body }: { body: T } = await xmlClient.post(url, options)

    return body
  },*/
}

export default {
  client,
}
