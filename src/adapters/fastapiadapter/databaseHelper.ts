import { query } from '@app/adapters/postgres'
import { FastAPIToken } from './types'

export const getAccessTokenFromDb = async (): Promise<string | null> => {
  const sql = `SELECT created, token_value FROM fastapi_tokens ORDER BY created DESC`
  const tokens: FastAPIToken[] = await query<FastAPIToken>(sql)

  return Array.isArray(tokens) && tokens.length > 0 ? tokens[0].token_value : null
}

export const setAccessTokenInDb = async (token: string): Promise<number | null> => {
  const sql = `INSERT INTO fastapi_tokens (token_value)
    VALUES ('${token}')
    RETURNING id`
  const ids = await query<number>(sql)

  return Array.isArray(ids) && ids.length > 0 ? ids[0] : null
}
