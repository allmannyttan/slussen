import { port } from './config'
import routes, {
  tenantRoutes,
  leaseContactRoutes,
  rentalRoutes,
  healthRoutes,
  authRoutes,
} from './routes'
import bodyParser from 'body-parser'
import timeout from 'connect-timeout'
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

authRoutes(app)
tenantRoutes(app)
leaseContactRoutes(app)
rentalRoutes(app)
healthRoutes(app)
routes(app)

app.use(timeout('300s'))
app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`
    🏠 API is running 
    ------------------------
    REST: http://localhost:${port}
  `)
})

export default app
