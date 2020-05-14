import tokenHelper from '../tokenHelper'
import config from '../../../config'
import axios from 'axios'
import { getAccessTokenFromDb } from '../databaseHelper'

jest.mock('axios', () => ({
  get: jest.fn(),
}))
jest.mock('../databaseHelper')
const mockFn = jest.fn(async (args) => Promise.resolve(args))

describe('#tokenHelper', () => {
  beforeEach(() => {
    jest.resetAllMocks()

    //console.log = jest.fn()
    //console.error = jest.fn()
    config.fastAPI = {
      baseUrl: 'test',
      user: 'user',
      password: 'pwd',
    }
    ;(getAccessTokenFromDb as jest.Mock).mockResolvedValue('a test token')
  })

  describe('#tokenRefresher', () => {
    test('calls wrapped function and returns the result', async () => {
      mockFn.mockResolvedValueOnce('that return value')

      const wrappedFunction = tokenHelper.tokenRefresher(mockFn)
      const result = await wrappedFunction({ url: 'cat' })

      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(result).toEqual('that return value')
    })

    test('gets token from DB and sets it in call to wrapped function', async () => {
      mockFn.mockResolvedValueOnce('that return value')

      const wrappedFunction = tokenHelper.tokenRefresher(mockFn)
      await wrappedFunction({ url: 'cat' })

      expect(getAccessTokenFromDb).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith({ url: 'cat', token: 'a test token' })
    })

    test('when token is missing in DB, it calls fastAPI to get a new one and passes it to wrapped function', async () => {
      mockFn.mockResolvedValueOnce('that return value')
      ;(getAccessTokenFromDb as jest.Mock).mockResolvedValueOnce(null)
      ;(axios.get as jest.Mock).mockResolvedValueOnce({
        headers: {
          'access-token': 'a access token from fastAPI',
        },
      })

      const wrappedFunction = tokenHelper.tokenRefresher(mockFn)
      await wrappedFunction({ url: 'cat' })

      expect(getAccessTokenFromDb).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenCalledWith({ url: 'cat', token: 'a access token from fastAPI' })
    })

    test('when token is invalid, it calls fastAPI to get a new one and passes it to wrapped function', async () => {
      mockFn
        .mockImplementationOnce(() => {
          throw new Error('Request failed with status code 403')
        })
        .mockResolvedValueOnce('that return value')
      ;(getAccessTokenFromDb as jest.Mock).mockResolvedValueOnce('invalid token')
      ;(axios.get as jest.Mock).mockResolvedValueOnce({
        headers: {
          'access-token': 'a access token from fastAPI',
        },
      })

      const wrappedFunction = tokenHelper.tokenRefresher(mockFn)
      await wrappedFunction({ url: 'cat' })

      expect(getAccessTokenFromDb).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith('login?user=demouser&password=demopassword', {
        baseURL: 'http://www.fastapi.se/backendprop/v1/api/',
      })
      expect(mockFn).toHaveBeenCalledTimes(2) //to verify re-try
      expect(mockFn).toHaveBeenCalledWith({ url: 'cat', token: 'a access token from fastAPI' })
    })

    test('when wrapped function fails for other reasons, the error is thrown', async () => {
      mockFn.mockImplementationOnce(() => {
        throw new Error('Any other reason')
      })

      const wrappedFunction = tokenHelper.tokenRefresher(mockFn)
      try {
        await wrappedFunction({ url: 'cat' })
      } catch (error) {
        expect(error.message).toEqual('Any other reason')
      }
    })
  })
})
