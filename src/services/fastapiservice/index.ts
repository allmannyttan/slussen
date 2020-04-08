import xml2js from 'xml2js'
import got from 'got'
import { fastAPI } from '../../config'

const BASE_URL = 'http://www.fastapi.se/apidocprop/v1/APIHandler.axd?url='

const headers = {
  'Content-Type': 'text/xml',
  Accept: 'text/xml',
  'Access-Token': fastAPI.accessToken,
}

export const xmlClient = got.extend({
  headers,
  prefixUrl: BASE_URL,
})

export const client = {
  get: async <T = any>(url: string, options: Partial<any> = {}) => {
    const { body }: { body: T } = await xmlClient.get(url, options)

    return xml2js
      .parseStringPromise(body)
      .then(function (result) {
        return result
      })
      .catch(function (err) {
        // Failed
        console.error(err)
        throw err
      })
  },

  /*
  post: async <T = any>(url: string) => {
    const { body }: { body: T } = await xmlClient.post(url, options)

    return body
  },*/
}
