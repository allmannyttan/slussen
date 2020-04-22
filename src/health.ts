import { Application, Request, Response } from 'express'
import tenantService from '@app/services/tenantservice'
import { performance } from 'perf_hooks'

interface SystemHealthInfo {
  name: string
  access: boolean
  responseTime: number
}

interface HealthResponse {
  health: SystemHealthInfo[]
}

const checkFastAPIAccess = async (): Promise<SystemHealthInfo> => {
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
}

const checkHealth = async (): Promise<HealthResponse> => {
  const health: SystemHealthInfo[] = [await checkFastAPIAccess()]

  return {
    health,
  }
}

export const routes = (app: Application) => {
  app.get('/health', async (_req: Request, res: Response) => res.json(await checkHealth()))
}
