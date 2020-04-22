import { Application, Request, Response } from 'express'
import tenantService from '@app/services/tenantservice'

interface HealthResponse {
  fastAPIAccess: boolean
}

const checkHealth = async (): Promise<HealthResponse> => {
  const tenants = await tenantService.getTenants()
  const fastAPIAccess = !!tenants

  return {
    fastAPIAccess,
  }
}

export const routes = (app: Application) => {
  app.get('/health', async (_req: Request, res: Response) => res.json(await checkHealth()))
}
