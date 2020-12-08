import crypto from 'crypto'
import { PasswordAndHash } from '../types'
import hash from '../hash'

jest.mock('crypto', () => ({
  randomBytes: jest.fn().mockImplementation((saltByteSize, func) => func('', Buffer.from('abba'))),
  pbkdf2: jest
    .fn()
    .mockImplementation((text, bSalt, i, keylen, digest, func) => func('', Buffer.from('abba'))),
}))

const abbaBase64 = Buffer.from('abba').toString('base64')

describe('createSalt', () => {
  test('resolves correctly when no error', async () => {
    const data = await hash.createSalt()

    expect(data).toEqual(abbaBase64)
  })

  test('throws error if something goes wrong', async () => {
    crypto.randomBytes.mockImplementationOnce((saltByteSize, func) => func('error', ''))
    try {
      await hash.createSalt()
    } catch (err) {
      expect(err).toEqual('error')
    }
  })
})

describe('hashPassword', () => {
  test('returns hashedPassword', async () => {
    const pw = await hash.hashPassword('abba', 'waterloo')
    expect(pw).toEqual(abbaBase64)
  })

  test('throws error when something goes wrong', async () => {
    crypto.pbkdf2.mockImplementationOnce((text, bSalt, i, keylen, digest, func) =>
      func('error', '')
    )
    try {
      const pw = await hash.hashPassword('abba', 'waterloo')
    } catch (err) {
      expect(err).toEqual('error')
    }
  })
})

describe('createSaltAndHash', () => {
  test('returns correct value', async () => {
    const result = await hash.createSaltAndHash('abba')

    expect(result).toEqual({
      password: abbaBase64,
      salt: abbaBase64,
    })
  })
})
