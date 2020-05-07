import swaggerUi from 'swagger-ui-express'
import specs from '../swagger.json'

import { Application } from 'express'

import { routes as tenantRoutes } from './services/tenantservice'
import { routes as leaseContactRoutes } from './services/leasecontractservice'
import { routes as rentalRoutes } from './services/rentalsservice'
import { routes as healthRoutes } from './health'

export { tenantRoutes, leaseContactRoutes, rentalRoutes, healthRoutes }

export default (app: Application) => {
  app.get('/', (_req, res) =>
    res.send(`<h1>fastAPI REST API</h1> <a href="/api-docs">Documentation available here</a>`)
  )
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
}
