import axios, { AxiosResponse } from 'axios'
import { fastAPI } from '../../../config'
import databaseHelper from '../databaseHelper'
import { FastAPIRequest } from './types'
import { getNewAccessToken, tokenRefresher } from '../tokenHelper'

jest.mock('axios', () => ({
  create: jest.fn(),
  get: jest.fn(() => ({
    headers: {
      'access-token': 'accessTokenx',
    },
  })),
}))

const mockedAxios = axios as jest.Mocked<typeof axios>
const errorMessage = 'error'
const accessToken = 'accessTokenx'
const accessTokenInDb = 'accessTokenInDb'

jest.mock('xml2json')

jest.mock('../dataBaseHelper', () => ({
  getAccessTokenFromDb: jest.fn().mockResolvedValue('accessTokenInDb'),
  setAccessTokenInDb: jest.fn().mockResolvedValue(7),
}))

jest.mock('../../../config', () => ({
  fastAPI: {
    baseUrl: 'fastapi',
    user: 'abba',
    password: 'abbaspassword',
  },
}))
const mockFunc = jest.fn()
const mockArgs = { url: 'fastapi/login?user=abba&password=abbaspassword', token: accessTokenInDb }

describe('#getNewAccessToken', () => {
  beforeEach(() => jest.resetModules())

  test('calls axios.get with correct params', async () => {
    await getNewAccessToken()

    expect(mockedAxios.get).toBeCalledWith('login?user=abba&password=abbaspassword', {
      baseURL: 'fastapi',
    })
  })

  test('calls axios.get with correct params', async () => {
    const result = await getNewAccessToken()

    expect(result).toEqual(accessToken)
  })

  test('throws error', async () => {
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(errorMessage))

    try {
      await getNewAccessToken()
    } catch (e) {
      expect(e.message).toEqual(errorMessage)
    }
  })

  describe('#tokenRefresher', () => {
    test('calls innerFunction with correct args', async () => {
      const resultFunc = await tokenRefresher(mockFunc)
      await resultFunc(mockArgs)

      expect(mockFunc).toHaveBeenCalledWith(mockArgs)
    })

    test('calls setAccessTokenIndb if token doesnt exist', async () => {
      databaseHelper.getAccessTokenFromDb.mockImplementationOnce(() => Promise.resolve(null))

      const resultFunc = await tokenRefresher(mockFunc)
      await resultFunc(mockArgs)

      expect(databaseHelper.setAccessTokenInDb).toHaveBeenCalledWith(accessToken)
    })

    test('throws error if setAccessTokenInDb fails', async () => {
      databaseHelper.getAccessTokenFromDb.mockImplementationOnce(() => Promise.resolve(null))
      databaseHelper.setAccessTokenInDb.mockImplementationOnce(() => Promise.reject(errorMessage))

      try {
        const resultFunc = await tokenRefresher(mockFunc)
        await resultFunc(mockArgs)
      } catch (error) {
        expect(error).toEqual(errorMessage)
      }
    })

    test('calls setAccessTokenIndb if token doesnt exist', async () => {
      const mockFunc = jest.fn((x) => x.token)
      const resultFunc = await tokenRefresher(mockFunc)
      const result = await resultFunc(mockArgs)

      expect(result).toEqual(accessTokenInDb)
    })
  })
})
