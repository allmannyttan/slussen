import express = require('express')

module.exports = (app: express.Application) => {
  app.get('/', (_req, res) => res.send('fastAPI'))
}
