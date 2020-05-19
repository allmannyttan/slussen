import { authorize, createToken, refreshToken } from '../jwt'
import hash from '../hash'
import jwt from 'jsonwebtoken'
import {
  setUserFailedLoginAttempts,
  setUserLocked,
  getUser,
} from '@app/middleware/auth/databaseHelper'
import { User } from '../types'
import createHttpError from 'http-errors'

jest.mock('@app/config', () => ({
  auth: {
    maxFailedLoginAttempts: 7,
    secret: 'a secret',
    expiresIn: 'en vecka',
  },
}))
jest.mock('../hash')
jest.mock('jsonwebtoken')
jest.mock('@app/middleware/auth/databaseHelper')

let validUser: User

beforeEach(() => {
  console.error = jest.fn()
  validUser = {
    id: 1,
    disabled: false,
    failedLoginAttempts: 0,
    locked: false,
    passwordHash: 'valid hash',
    salt: 'a salt',
    username: 'validuser',
  }
  ;(hash.hashPassword as jest.Mock).mockResolvedValue('valid hash')
  ;(jwt.sign as jest.Mock).mockReturnValue('the token')
  ;(getUser as jest.Mock).mockResolvedValue(validUser)
})

describe('#jwt', () => {
  describe('#createToken', () => {
    afterEach(() => {
      jest.resetAllMocks()
    })

    test('it gets the user from the database', async () => {
      await createToken('username', 'password')

      expect(getUser).toHaveBeenCalledWith('username')
    })

    test('it creates a token at successful login', async () => {
      const result = await createToken('username', 'password')

      expect(result.token).toEqual('the token')
    })

    test('it creates tokens with proper parameters', async () => {
      await createToken('username', 'password')

      expect(jwt.sign).toHaveBeenCalledWith(
        {
          sub: validUser.id,
          username: validUser.username,
        },
        'a secret',
        {
          expiresIn: 'en vecka',
        }
      )
    })

    test('it logs and throws Authentication error if password is incorrect', async () => {
      ;(hash.hashPassword as jest.Mock).mockResolvedValue('NOT a valid hash')

      try {
        await createToken('username', 'password')
      } catch (e) {
        expect(console.error).toHaveBeenCalledWith(new Error(`Invalid password: ${validUser.id}.`))
        expect(e).toBeInstanceOf(createHttpError.HttpError)
        expect(e.status).toEqual(401)
      }
    })

    test('it logs and throws error if user is missing', async () => {
      ;(getUser as jest.Mock).mockResolvedValue(null)

      try {
        await createToken('username', 'password')
      } catch (e) {
        expect(console.error).toHaveBeenCalledWith(new Error(`No such user: username.`))
        expect(e).toBeInstanceOf(createHttpError.HttpError)
        expect(e.status).toEqual(401)
      }
    })

    test('it logs and throws error if user is locked', async () => {
      validUser.locked = true

      try {
        await createToken('username', 'password')
      } catch (e) {
        expect(console.error).toHaveBeenCalledWith(new Error(`User locked: ${validUser.id}.`))
        expect(e).toBeInstanceOf(createHttpError.HttpError)
        expect(e.status).toEqual(401)
      }
    })

    test('it logs and throws error if user is disabled', async () => {
      validUser.disabled = true

      try {
        await createToken('username', 'password')
      } catch (e) {
        expect(console.error).toHaveBeenCalledWith(new Error(`User disabled: ${validUser.id}.`))
        expect(e).toBeInstanceOf(createHttpError.HttpError)
        expect(e.status).toEqual(401)
      }
    })

    test('it increases number of failed logins if password is wrong', async () => {
      ;(hash.hashPassword as jest.Mock).mockResolvedValue('NOT a valid hash')

      try {
        await createToken('username', 'password')
      } catch (e) {
        expect(setUserFailedLoginAttempts).toHaveBeenCalledWith(validUser.id, 1)
      }
    })

    test('it locks a user when max number of failed logins is reached', async () => {
      ;(hash.hashPassword as jest.Mock).mockResolvedValue('NOT a valid hash')
      validUser.failedLoginAttempts = 6

      try {
        await createToken('username', 'password')
      } catch (e) {
        expect(setUserLocked).toHaveBeenCalledWith(1, true)
      }
    })

    test('it resets failed logins when correct login is made', async () => {
      validUser.failedLoginAttempts = 6

      await createToken('username', 'password')

      expect(setUserFailedLoginAttempts).toHaveBeenCalledWith(validUser.id, 0)
    })
  })
})
