import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'
import { auth } from '../../config'
import createHttpError from 'http-errors'
import SQL from 'sql-template-strings'
import { query } from '@app/adapters/postgres'
import hash from './hash'
import { User, JWT } from './types'

const { secret } = auth

const setUserFailedLoginAttempts = async (userId: number, attempts: number): Promise<void> => {
  const sql = SQL`
    UPDATE "users" 
    SET failed_login_attempts = ${attempts}
    WHERE id = ${userId}
  `
  await query(sql)
}

const setUserLocked = async (userId: number, locked: boolean): Promise<void> => {
  const sql = SQL`
    UPDATE "users" 
    SET locked = ${locked}
    WHERE id = ${userId}
  `
  await query(sql)
}

const getUser = async (username: string): Promise<User> => {
  const sql = SQL`
      SELECT
        id,
        username,
        password_hash as "passwordHash",
        salt,
        locked,
        disabled,
        failed_login_attempts as "failedLoginAttempts"
      FROM users
      WHERE username = ${username}
    `

  const [user] = await query<User>(sql)

  return user
}

export const createToken = async (username: string, password: string): Promise<JWT> => {
  try {
    const user = await getUser(username)
    console.log(user)
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

const authorize = ({ authorization }: any = {}) => {
  const authHeader: string | undefined = authorization
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

  const err = createHttpError('Unauthorized')
  err.status = 401
  throw err
}

export const authMiddleware: RequestHandler = (req, _, next) => {
  Object.assign(req, (authorize as any)(req.headers))
  next()
}

export default {
  authMiddleware,
}
