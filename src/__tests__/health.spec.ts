import { Application, Request, Response } from 'express'
import { performance } from 'perf_hooks'
import tenantService from '../services/tenantservice'
import postgres from '../adapters/postgres'
import tokenHelper from '../adapters/fastapiadapter/tokenHelper'
import { checkHealth } from '../health'

jest.mock('../adapters/fastapiadapter/tokenHelper', () => ({
  getNewAccessToken: jest.fn().mockResolvedValue('1337'),
}))

jest.mock('perf_hooks', () => ({
  performance: {
    now: jest.fn().mockReturnValue(12),
  },
}))

jest.mock('../adapters/postgres', () => ({
  query: jest.fn().mockResolvedValue([{ now: new Date() }]),
}))

const errorMessage = 'errorMessagex'

describe('checkHealth', () => {
  beforeEach(() => jest.resetModules())

  test('calls get accessToken', async () => {
    await checkHealth()
    expect(tokenHelper.getNewAccessToken).toHaveBeenCalled()
  })

  test('calls postgres', async () => {
    await checkHealth()
    expect(postgres.query).toHaveBeenCalled()
  })

  test('returns message', async () => {
    const expectedResult = {
      health: [
        { name: 'fastAPI', access: true, responseTime: expect.any(Number) },
        { name: 'db', access: true, responseTime: expect.any(Number) },
      ],
    }
    const result = await checkHealth()

    expect(result).toEqual(expectedResult)
  })

  test('returns false when fastapi rejects', async () => {
    tokenHelper.getNewAccessToken.mockImplementationOnce(() => Promise.reject(errorMessage))
    const expectedResult = {
      health: [
        { name: 'fastAPI', access: false, errorMessage, responseTime: expect.any(Number) },
        { name: 'db', access: true, responseTime: expect.any(Number) },
      ],
    }
    const result = await checkHealth()

    expect(result).toEqual(expectedResult)
  })

  test('returns false when postgres rejects', async () => {
    postgres.query.mockImplementationOnce(() => Promise.reject(errorMessage))
    const expectedResult = {
      health: [
        { name: 'fastAPI', access: true, responseTime: expect.any(Number) },
        { name: 'db', access: false, errorMessage, responseTime: expect.any(Number) },
      ],
    }
    const result = await checkHealth()

    expect(result).toEqual(expectedResult)
  })
})
