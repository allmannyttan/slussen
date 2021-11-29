import { Application, static as ExpressStatic } from 'express'

import { routes as authRoutes } from './services/authservice'
import { routes as tenantRoutes } from './services/tenantservice'
import { routes as leaseContactRoutes } from './services/leasecontractservice'
import { routes as rentalRoutes } from './services/rentalservice'
import { routes as roomRoutes } from './services/roomservice'
import { routes as inventoryRoutes } from './services/inventoryservice'
import { routes as healthRoutes } from './health'
import documentation from './documentation'

export {
  authRoutes,
  tenantRoutes,
  leaseContactRoutes,
  rentalRoutes,
  roomRoutes,
  inventoryRoutes,
  healthRoutes,
}

export default (app: Application) => {
  app.use(ExpressStatic('public'))
  app.get('/', (_req, res) => res.redirect('/api-docs'))
  app.get('/docs/swagger.json', (_, res) => {
    res.sendFile('swagger.json', { root: '.' })
  })
  app.get('/api-docs', (_, res) => {
    res.send(documentation)
  })
}
