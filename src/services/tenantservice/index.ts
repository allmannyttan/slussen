import { Application } from 'express'

export const routes = (app: Application) => {
  app.get('/tenant', (_req, res) => res.send('fastAPI tenants'))
}
