import { Application } from 'express'

import { routes as tenantRoutes } from './services/tenantservice'
import { routes as leaseContactRoutes } from './services/leasecontractservice'
import { routes as healthRoutes } from './health'

export { tenantRoutes, leaseContactRoutes, healthRoutes }

export default (app: Application) => {
  app.get('/', (_req, res) => res.send('fastAPI'))
}
