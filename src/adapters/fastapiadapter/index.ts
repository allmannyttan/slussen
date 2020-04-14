import xml2js from 'xml2js'
import axios from 'axios'
import { fastAPI } from '../../config'

const headers = {
  'Access-Token': fastAPI.accessToken,
  Accept: '*/*',
}

export const xmlClient = axios.create({
  headers,
  baseURL: fastAPI.baseUrl,
  responseType: 'text',
})

export const client = {
  get: async <T = any>(url: string, options: Partial<any> = {}) => {
    try {
      const { data }: { data: T } = await xmlClient.get(url, options)

      return xml2js
        .parseStringPromise(data)
        .then(function (result) {
          return result
        })
        .catch(function (err) {
          // Failed
          console.error(err)
          throw err
        })
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
