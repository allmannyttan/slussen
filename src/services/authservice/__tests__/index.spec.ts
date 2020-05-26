import { authMiddleware } from '../../../middleware/auth'
import { createToken, refreshToken } from '../../../helpers/jwt'

import supertest from 'supertest'

jest.mock('../../../config', () => ({
  port: 0,
  auth: {
    secret: 'a secret',
  },
}))

jest.mock('../../../middleware/auth')
jest.mock('../../../helpers/jwt')
jest.mock('../../../helpers/hash')

import server from '../../../server'

let errorMock: jest.Mock
let logMock: jest.Mock

beforeEach(() => {
  errorMock = jest.fn()
  logMock = jest.fn()

  console.error = errorMock
  console.log = logMock
  ;(authMiddleware as jest.Mock).mockImplementation((req, res, next) => {
    req.auth = {}
    next()
  })
  ;(createToken as jest.Mock).mockResolvedValue({ token: 'a token' })
  ;(refreshToken as jest.Mock).mockResolvedValue({ token: 'a token' })
})

const verifyGetRouteIsProtected = async (route: string) => {
  try {
    await supertest(server).get(route).expect(200)
    expect(authMiddleware).toHaveBeenCalledTimes(1)
  } catch (error) {
    fail(error)
  }
}

describe('#authservice', () => {
  describe('authorized routes', () => {
    afterEach(() => {
      jest.resetAllMocks()
    })

    it('GET /auth/test is protected', async () => {
      await verifyGetRouteIsProtected('/auth/test')
    })

    it('GET /auth/refresh-token is protected', async () => {
      await verifyGetRouteIsProtected('/auth/refresh-token')
    })
  })
})
