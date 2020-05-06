import { port } from './config'
import routes, { tenantRoutes, leaseContactRoutes, healthRoutes } from './routes'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import specs from '../swagger.json'

const app = express()
app.set('etag', 'strong')
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

tenantRoutes(app)
leaseContactRoutes(app)
healthRoutes(app)
routes(app)

app.listen(port, () => {
  console.log(`
    API is running
    ------------------------
    REST: http://localhost:${port}
  `)
})
