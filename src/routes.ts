import { Application } from 'express'

export default (app: Application) => {
  app.get('/', (_req, res) => res.send('fastAPI'))
}
