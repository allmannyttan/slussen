import axios, { AxiosResponse } from 'axios'
import { fastAPI } from '@app/config'
import { getAccessTokenFromDb, setAccessTokenInDb } from './databaseHelper'
import { FastAPIRequest } from './types'

const NO_TOKENS_IN_DB_ERROR = 'Access token missing in DB.'

export const getNewAccessToken = async (): Promise<string> => {
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
  return (
    error.message === 'Request failed with status code 403' ||
    error.message === NO_TOKENS_IN_DB_ERROR
  )
}

/**
 * Gets the latest fastAPI token from DB and passes that to the function it wraps.
 * If the call to the wrapped function fails in a way that indicates
 * that it is due to an invalid token it gets a new token from fastAPI, stores it in DB
 * and calls the wrapped funtion with the new token.
 *
 * @param {wrapped function} func
 */
export const tokenRefresher = <T extends (arg: FastAPIRequest) => any>(
  func: T
): ((funcArg: FastAPIRequest) => Promise<ReturnType<T>>) => {
  return async (arg: FastAPIRequest): Promise<ReturnType<T>> => {
    try {
      const token = await getAccessTokenFromDb()

      if (token === null) {
        throw new Error(NO_TOKENS_IN_DB_ERROR)
      }

      arg.token = token
      const results = await func(arg)
      return results
    } catch (error) {
      //If error is invalid access-token, get a new one and retry.
      if (isInvalidAccessTokenError(error)) {
        const token = await getNewAccessToken()

        await setAccessTokenInDb(token)

        arg.token = token
        const results = await func(arg)
        return results
      } else {
        throw error
      }
    }
  }
}
