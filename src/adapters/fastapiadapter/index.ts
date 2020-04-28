import xml2json from 'xml2json'
import axios from 'axios'
import config from '@app/config'

export const client = {
  get: async <T = any>(url: string, options: Partial<any> = {}) => {
    const headers = {
      'Access-Token': config.fastAPI.accessToken,
      Accept: '*/*',
    }

    const xmlClient = axios.create({
      headers,
      baseURL: config.fastAPI.baseUrl,
      responseType: 'text',
    })

    try {
      const { data } = await xmlClient.get(url, options)
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
            'fi2spsys_address'
          ],
        })
      )

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
