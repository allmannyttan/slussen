import { Client } from 'pg'

import { postgres as config } from '../../../config'
import { SQLStatement } from 'sql-template-strings'
import { client, query } from '../index'

const mockSql = 'SELECT * FROM users WHERE id = 1'

const mockConfig = {
  host: 'postgreshost',
  port: 1337,
  user: 'abba',
  password: 'abbaspassword',
  database: 'abbadb',
  schema: 'waterloo',
}

const mockSqlStatement = {
  values: [1, 'abba'],
  sql: '',
  name: '',
  text: 'SELECT * FROM users where id = $1 AND name = $2',
} as SQLStatement

jest.mock('pg', () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(() => ({
      rows: [
        {
          id: 1,
          user: 'abba',
        },
      ],
    })),
    end: jest.fn(),
  }
  return { Client: jest.fn(() => mClient) }
})

jest.mock('../../../config', () => ({
  postgres: {
    host: 'postgreshost',
    port: 1337,
    user: 'abba',
    password: 'abbaspassword',
    database: 'abbadb',
    schema: 'waterloo',
  },
}))
describe('client', () => {
  test('creates new client', async () => {
    await client()

    expect(Client).toHaveBeenCalledWith(mockConfig)
  })

  test('connects', async () => {
    await client()
    const pgClient = new Client()
    expect(pgClient.connect).toHaveBeenCalled()
  })

  test('returns client', async () => {
    const postgresClient = await client()
    const pgClient = new Client()

    expect(postgresClient).toEqual(pgClient)
  })

  describe('query', () => {
    test('can handle string and values', async () => {
      const pgClient = new Client()
      await query(mockSql, mockSqlStatement.values)

      expect(pgClient.query).toHaveBeenCalledWith(mockSql, mockSqlStatement.values)
    })

    test('handles SQLStatement and no values', async () => {
      const pgClient = new Client()
      await query(mockSqlStatement, [])

      expect(pgClient.query).toHaveBeenCalledWith(mockSqlStatement.text, mockSqlStatement.values)
    })

    test('returns data', async () => {
      const result = await query(mockSqlStatement, [])

      expect(result).toEqual([{ id: 1, user: 'abba' }])
    })
  })
})
