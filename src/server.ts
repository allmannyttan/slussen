import { port } from './config'
import routes, {
  tenantRoutes,
  leaseContactRoutes,
  rentalRoutes,
  healthRoutes,
  authRoutes,
  roomRoutes,
} from './routes'
import timeout from 'connect-timeout'
import express from 'express'
import cors from 'cors'
import errorMiddleware from '@app/middleware/errorhandler'
import logger from '@app/helpers/logger'

const app = express()
app.set('etag', 'strong')
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

authRoutes(app)
tenantRoutes(app)
leaseContactRoutes(app)
rentalRoutes(app)
roomRoutes(app)
healthRoutes(app)
routes(app)

app.use(timeout('300s'))
app.use(errorMiddleware)

app.listen(port, () => {
  logger.info(`🏠 API is running (http://localhost:${port})`)
})

export default app
