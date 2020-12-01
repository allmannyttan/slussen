import { Application } from 'express'

import { routes as authRoutes } from './services/authservice'
import { routes as tenantRoutes } from './services/tenantservice'
import { routes as leaseContactRoutes } from './services/leasecontractservice'
import { routes as rentalRoutes } from './services/rentalservice'
import { routes as healthRoutes } from './health'
import documentation from './documentation'

export { authRoutes, tenantRoutes, leaseContactRoutes, rentalRoutes, healthRoutes }

export default (app: Application) => {
  app.get('/', (_req, res) => res.redirect('/api-docs'))
  app.get('/docs/swagger.json', (_, res) => {
    res.sendFile('swagger.json', { root: '.' })
  })
  app.get('/api-docs', (_, res) => {
    res.send(documentation)
  })
}
