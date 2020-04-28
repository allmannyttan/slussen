import xml2json from 'xml2json'
import axios, { AxiosResponse } from 'axios'
import { fastAPI } from '@app/config'

const headers = {
  'Access-Token': '123456',
  Accept: '*/*',
}

export const getAccessToken = async (): Promise<string> => {
  const loginResult: AxiosResponse<any> = await axios.get(
    `login?user=${fastAPI.user}&password=${fastAPI.password}`,
    {
      baseURL: fastAPI.baseUrl,
    }
  )
  const token: string = loginResult.headers['access-token']
  return token
}

const isInvalidAccessTokenError = (error: Error): boolean => {
  return error.message === 'Request failed with status code 403'
}

const tokenRefresher = <T extends (...args: any[]) => any>(
  func: T
): ((...funcArgs: Parameters<T>) => Promise<ReturnType<T>>) => {
  return async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    try {
      console.log('refresher calling ' + func.name)
      const results = await func(...args)
      return results
    } catch (error) {
      console.log('error caught')
      //If error is invalid access-token, get a new one and retry.
      if (isInvalidAccessTokenError(error)) {
        // TODO: get new token and try again
        console.log('getting token with it')
        const results = await func(...args)
        return results
      } else {
        throw error
      }
    }
  }
}

const innerGet = async <T = any>(url: string, options: Partial<any> = {}) => {
  const xmlClient = axios.create({
    headers,
    baseURL: fastAPI.baseUrl,
    responseType: 'text',
  })
  const { data }: { data: T } = await xmlClient.get(url, options)
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
      ],
    })
  )

  return result
}

export const client = {
  get: tokenRefresher(innerGet),

  /*
  post: async <T = any>(url: string) => {
    const { body }: { body: T } = await xmlClient.post(url, options)

    return body
  },*/
}

export default {
  client,
}
