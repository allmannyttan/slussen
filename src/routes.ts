import { Application } from 'express'

import { routes as tenantRoutes } from './services/tenantservice'

export { tenantRoutes }

import { client } from './services/fastapiservice'

export default (app: Application) => {
  app.get('/', (_req, res) => res.send('fastAPI'))
  app.get('/fast', async (_req, res) => {
    res.json(await client.get('/api/fi2partner'))
  })
}
