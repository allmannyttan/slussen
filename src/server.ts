import { port } from './config'
import routes from './routes'
import tenantRoutes from './services/tenantservice/routes'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'

const app: express.Application = express()
app.set('etag', 'strong')
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

tenantRoutes(app)
routes(app)

app.listen(port, () => {
  console.log(`
    API is running
    ------------------------
    REST: http://localhost:${port}
  `)
})
