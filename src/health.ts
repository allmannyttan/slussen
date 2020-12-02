import { Application, Request, Response } from 'express'
import { performance } from 'perf_hooks'
import tenantService from '@app/services/tenantservice'
import { query } from '@app/adapters/postgres'
import { getNewAccessToken } from '@app/adapters/fastapiadapter/tokenHelper'

interface SystemHealthInfo {
  name: string
  access: boolean
  responseTime: number
  errorMessage?: string
}

interface HealthResponse {
  health: SystemHealthInfo[]
}

const checkFastAPIAccess = async (): Promise<SystemHealthInfo> => {
  try {
    const start = performance.now()
    const token = await getNewAccessToken()
    const end = performance.now()

    const access = !!token
    const responseTime = end - start

    return {
      name: 'fastAPI',
      access,
      responseTime,
    }
  } catch (error) {
    return {
      name: 'fastAPI',
      access: false,
      responseTime: 0,
      errorMessage: error,
    }
  }
}

const checkDbAccess = async (): Promise<SystemHealthInfo> => {
  try {
    const start = performance.now()
    const [now] = await query<Date>('SELECT NOW();')
    const end = performance.now()

    const access = now && now instanceof Date
    const responseTime = end - start

    return {
      name: 'db',
      access,
      responseTime,
    }
  } catch (error) {
    return {
      name: 'db',
      access: false,
      responseTime: 0,
      errorMessage: error,
    }
  }
}

export const checkHealth = async (): Promise<HealthResponse> => {
  const health: SystemHealthInfo[] = [await checkFastAPIAccess(), await checkDbAccess()]

  return {
    health,
  }
}

export const routes = (app: Application) => {
  app.get('/health', async (_req: Request, res: Response) => res.json(await checkHealth()))
}
