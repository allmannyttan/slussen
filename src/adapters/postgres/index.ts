import { Client, QueryArrayResult } from 'pg'
import { postgres: config } from '@app/config'

const wait = (ms: number) => new Promise((resolve) => setTimeout(() => resolve(), ms))

interface TemplateString {
  text: string
  values: never[]
}

async function connect(attemptNo = 0): Promise<Client> {
  try {
    const client = new Client(config)
    await client.connect()
    return client
  } catch (err) {
    console.warn(err)

    if (attemptNo >= 10) {
      throw err
    }

    const delay = Math.min(1000 * attemptNo, 7000)
    await wait(delay)
    return connect(++attemptNo)
  }
}

async function client(): Promise<Client> {
  const client: Client = await connect()
  return client
}

async function query(sql: string | TemplateString, params = []): Promise<QueryArrayResult<any[]>> {
  // when using `sql-template-strings`
  if (typeof sql !== 'string') {
    params = sql.values
    sql = sql.text
  }

  const conn = await connect()

  try {
    const result = await conn.query(sql, params)
    return result
  } finally {
    await conn.end()
  }
}

module.exports = { client, query }
