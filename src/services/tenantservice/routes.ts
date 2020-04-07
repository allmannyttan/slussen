import { Application } from 'express'

export default (app: Application) => {
  app.get('/tenant', (_req, res) => res.send('fastAPI tenants'))
}
