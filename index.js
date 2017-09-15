const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')
const rootSchema = require('./graphql')
const cors = require('cors')
const helmet = require('helmet')
const MongoClient = require('mongodb').MongoClient
const config = require('./config')

const app = express()

const port = 4000

app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(req => ({
    schema: rootSchema,
    rootValue: {
      db: req.app.locals.db
    }
  }))
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

MongoClient.connect(config.DB_CONNECTION_STRING, {
  promiseLibrary: Promise
})
  .catch(err => console.error(err.stack))
  .then(db => {
    app.locals.db = db
    console.log('Database connection successful.')
    app.listen(port, err => {
      if (err) throw err
      console.log(`> Server now running at http://localhost:${port}`)
    })
  })
