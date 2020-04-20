import { Application } from 'express'

import { routes as tenantRoutes } from './services/tenantservice'
import { routes as leaseContactRoutes } from './services/leasecontractservice'

export { tenantRoutes, leaseContactRoutes }

export default (app: Application) => {
  app.get('/', (_req, res) => res.send('fastAPI'))
}
