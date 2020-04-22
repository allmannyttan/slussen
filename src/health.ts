import { Application, Request, Response } from 'express'
import tenantService from '@app/services/tenantservice'

interface HealthResponse {
  fastAPIAccess: boolean
}

const checkHealth = async (): Promise<HealthResponse> => {
  const tenants = await tenantService.getTenants()
  const fastAPIAccess = Array.isArray(tenants) && tenants.length > 0

  return {
    fastAPIAccess,
  }
}

export const routes = (app: Application) => {
  app.get('/health', async (_req: Request, res: Response) => res.json(await checkHealth()))
}
