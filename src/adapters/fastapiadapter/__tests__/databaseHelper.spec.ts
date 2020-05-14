/* eslint-disable @typescript-eslint/camelcase */
import { getAccessTokenFromDb, setAccessTokenInDb } from '../databaseHelper'
import { query } from '@app/adapters/postgres'
import { FastAPIToken } from '../types'

jest.mock('@app/adapters/postgres')

describe('#databaseHelper', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('#getAccessTokenFromDb', () => {
    test('gets the newest token and returns it value', async () => {
      const tokens: FastAPIToken[] = [
        {
          id: 1,
          created: new Date(),
          token_value: 'token value',
        },
      ]
      ;(query as jest.Mock).mockResolvedValue(tokens)

      const result = await getAccessTokenFromDb()

      expect(result).toEqual('token value')
      expect(query.mock.calls[0][0]).toMatchInlineSnapshot(
        `"SELECT created, token_value FROM fastapi_tokens ORDER BY created DESC LIMIT 1"`
      )
    })

    test('returns null if there are no tokens in DB', async () => {
      const tokens: FastAPIToken[] = []
      ;(query as jest.Mock).mockResolvedValue(tokens)

      const result = await getAccessTokenFromDb()

      expect(result).toEqual(null)
    })

    test('throws error if call to DB fails', async () => {
      ;(query as jest.Mock).mockImplementation(() => {
        throw new Error('fail')
      })

      try {
        await getAccessTokenFromDb()
      } catch (error) {
        expect(error.message).toEqual('fail')
      }
    })
  })

  describe('#setAccessTokenInDb', () => {
    test('writes a token to db and returns the id', async () => {
      ;(query as jest.Mock).mockResolvedValue([1])

      const result = await setAccessTokenInDb('token')

      expect(result).toEqual(1)
      expect(query.mock.calls[0][0]).toMatchInlineSnapshot(`
        "INSERT INTO fastapi_tokens (token_value)
            VALUES ('token')
            RETURNING id"
      `)
    })

    test('throws error if call to DB fails', async () => {
      ;(query as jest.Mock).mockImplementation(() => {
        throw new Error('fail')
      })

      try {
        await setAccessTokenInDb('token')
      } catch (error) {
        expect(error.message).toEqual('fail')
      }
    })
  })
})
