import { Client, QueryArrayResult } from 'pg'
import { postgres as config } from '@app/config'

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

export const query = async (
  sql: string | TemplateString,
  params = []
): Promise<QueryArrayResult<any[]>> => {
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