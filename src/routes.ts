import { Application } from 'express'

import { routes as tenantRoutes } from './services/tenantservice'
import { routes as leaseContactRoutes } from './services/leasecontractservice'
import { routes as healthRoutes } from './health'

import { getAccessToken } from './adapters/fastapiadapter'

export { tenantRoutes, leaseContactRoutes, healthRoutes }

export default (app: Application) => {
  app.get('/', (_req, res) => res.send('fastAPI'))
  app.get('/login', async (_req, res) => res.send(await getAccessToken()))
}
