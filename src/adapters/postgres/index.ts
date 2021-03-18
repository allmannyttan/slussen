import { Client } from 'pg'
import { postgres as config } from '@app/config'
import { SQLStatement } from 'sql-template-strings'
import logger from '@app/helpers/logger'

const wait = (ms: number) => new Promise((resolve) => setTimeout(() => resolve(), ms))

async function connect(attemptNo = 0): Promise<Client> {
  try {
    const client = new Client(config)
    await client.connect()
    return client
  } catch (err) {
    logger.error(err)

    if (attemptNo >= 3) {
      throw err
    }

    const delay = Math.min(1000 * attemptNo, 7000)
    await wait(delay)
    return connect(++attemptNo)
  }
}

export const client = async (): Promise<Client> => {
  const client: Client = await connect()
  return client
}

export const query = async <T>(sql: string | SQLStatement, params = [] as any): Promise<T[]> => {
  // when using `sql-template-strings`
  if (typeof sql !== 'string') {
    params = sql.values
    sql = sql.text
  }

  const conn = await connect()

  try {
    const result = await conn.query<T>(sql, params)
    return result.rows
  } finally {
    await conn.end()
  }
}
