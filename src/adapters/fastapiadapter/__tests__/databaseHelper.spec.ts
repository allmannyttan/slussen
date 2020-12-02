import postgres from '../../postgres'
import { getAccessTokenFromDb, setAccessTokenInDb } from '../databaseHelper'

const mockedAccessToken = '1337'
const mockedReturningId = 7
jest.mock('../../postgres', () => ({
  query: jest.fn().mockResolvedValue([
    {
      token_value: '1337',
    },
  ]),
}))

describe('#getAccessTokenFromDb', () => {
  beforeEach(() => jest.resetModules())

  test('calls query', async () => {
    await getAccessTokenFromDb()

    expect(postgres.query).toHaveBeenCalledTimes(1)
  })

  test('returns token', async () => {
    const accessToken = await getAccessTokenFromDb()

    expect(accessToken).toEqual(mockedAccessToken)
  })

  test('returns null when no accessToken', async () => {
    postgres.query.mockResolvedValueOnce([])

    const accessToken = await getAccessTokenFromDb()

    expect(accessToken).toEqual(null)
  })
})

describe('#setAccessTokenInDb', () => {
  beforeEach(() => jest.resetModules())

  test('calls query', async () => {
    await setAccessTokenInDb(mockedAccessToken)

    expect(postgres.query).toHaveBeenCalledWith(`INSERT INTO fastapi_tokens (token_value)
    VALUES ('${mockedAccessToken}')
    RETURNING id`)
  })

  test('returns id', async () => {
    postgres.query.mockResolvedValueOnce([mockedReturningId])
    const id = await setAccessTokenInDb(mockedAccessToken)

    expect(id).toEqual(mockedReturningId)
  })
})
