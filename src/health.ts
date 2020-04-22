import { Application, Request, Response } from 'express'
import tenantService from '@app/services/tenantservice'

interface HealthResponse {
  fastAPIAccess: boolean
}

const checkHealth = async (): Promise<HealthResponse> => {
  const fastAPIAccess = await tenantService.getTenants()
  console.log(fastAPIAccess)
  return {
    fastAPIAccess: true,
  }
}

export const routes = (app: Application) => {
  app.get('/health', async (_req: Request, res: Response) => res.json(await checkHealth()))
}
