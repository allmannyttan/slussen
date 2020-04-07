import { port } from './config'
import bodyParser = require('body-parser')
import express = require('express')
import cors = require('cors')

const app: express.Application = express()
app.set('etag', 'strong')
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


require('./routes')(app)

app.listen(port, () => {
  console.log(`
    API is running
    ------------------------
    REST: http://localhost:${port}
  `)
})
