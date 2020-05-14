import swaggerUi from 'swagger-ui-express'
import specs from '../swagger.json'
import { authMiddleware } from '@app/middleware/auth/jwt'
import { Application } from 'express'

import { routes as authRoutes } from './services/authservice'
import { routes as tenantRoutes } from './services/tenantservice'
import { routes as leaseContactRoutes } from './services/leasecontractservice'
import { routes as rentalRoutes } from './services/rentalservice'
import { routes as healthRoutes } from './health'

export { authRoutes, tenantRoutes, leaseContactRoutes, rentalRoutes, healthRoutes }

export default (app: Application) => {
  app.get('/', (_req, res) =>
    res.send(`<h1>fastAPI REST API</h1> <a href="/api-docs">Documentation available here</a>`)
  )
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
  app.use('/auth-test', authMiddleware, (_req, res) => res.send('hej hej'))
}
