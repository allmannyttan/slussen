import { Application } from 'express'

import { routes as tenantRoutes } from './services/tenantservice'

export { tenantRoutes }

export default (app: Application) => {
  app.get('/', (_req, res) => res.send('fastAPI'))
}
