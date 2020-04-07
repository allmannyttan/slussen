//const { port } = require('./config')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const app = express()
app.set('etag', 'strong')
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

require('./routes')(app)

//TODO: Move port to config
app.listen(4000, () => {
  console.log(`
    API is running
    ------------------------
    REST: http://localhost:4000
  `)
})
