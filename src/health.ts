import { Application, Request, Response } from 'express'
import { performance } from 'perf_hooks'
import tenantService from '@app/services/tenantservice'
import { query } from '@app/adapters/postgres'

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
    const tenants = await tenantService.getTenants()
    const end = performance.now()

    const access = Array.isArray(tenants) && tenants.length > 0
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
    const {
      rows: [row],
    } = await query('SELECT NOW();')
    const end = performance.now()

    const access = row && row.now instanceof Date
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

const checkHealth = async (): Promise<HealthResponse> => {
  const health: SystemHealthInfo[] = [await checkFastAPIAccess(), await checkDbAccess()]

  return {
    health,
  }
}

export const routes = (app: Application) => {
  app.get('/health', async (_req: Request, res: Response) => res.json(await checkHealth()))
}
