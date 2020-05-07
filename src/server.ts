import { port } from './config'
import routes, { tenantRoutes, leaseContactRoutes, rentalRoutes, healthRoutes } from './routes'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import errorMiddleware from '@app/middleware/errorhandler'

const app = express()
app.set('etag', 'strong')
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

tenantRoutes(app)
leaseContactRoutes(app)
rentalRoutes(app)
healthRoutes(app)
routes(app)

app.listen(port, () => {
  console.log(`
    API is running
    ------------------------
    REST: http://localhost:${port}
  `)
})
app.use(errorMiddleware)
