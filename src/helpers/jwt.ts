import { auth } from '../config'
import { JWT } from '../middleware/auth/types'
import {
  setUserFailedLoginAttempts,
  setUserLocked,
  getUser,
} from '../middleware/auth/databaseHelper'
import createHttpError from 'http-errors'
import hash from './hash'
import jwt from 'jsonwebtoken'

const { secret } = auth

export const createToken = async (username: string, password: string): Promise<JWT> => {
  try {
    const user = await getUser(username)

    if (!user) {
      throw new Error(`No such user: ${username}.`)
    }

    if (user.locked === true) {
      throw new Error(`User locked: ${user.id}.`)
    }

    if (user.disabled === true) {
      throw new Error(`User disabled: ${user.id}.`)
    }

    if (user.passwordHash !== (await hash.hashPassword(password, user.salt))) {
      const fails = user.failedLoginAttempts + 1

      await setUserFailedLoginAttempts(user.id, fails)

      if (fails >= auth.maxFailedLoginAttempts) {
        await setUserLocked(user.id, true)
      }

      throw new Error(`Invalid password: ${user.id}.`)
    }

    // Clear failed login attempts
    await setUserFailedLoginAttempts(user.id, 0)

    // Welcome in, here is your token
    const token = jwt.sign(
      {
        sub: user.id,
        username: user.username,
      },
      auth.secret,
      {
        expiresIn: auth.expiresIn,
      }
    )

    return { token }
  } catch (error) {
    // How do we log this?
    console.error(error)
    const err = createHttpError('Invalid credentials')
    err.status = 401
    throw err
  }
}

export const authorize = ({ authorization }: any = {}) => {
  const authHeader: string | undefined = authorization

  try {
    if (authHeader) {
      const user:
        | string
        | {
            sub?: number
            username?: string
          } = jwt.verify(authHeader.replace('Bearer ', ''), secret)

      if (user && typeof user !== 'string' && user.sub) {
        return { auth: user }
      }
    }
  } catch (error) {
    error.status = 401
    throw error
  }

  const err = createHttpError('Unauthorized')
  err.status = 401
  throw err
}
