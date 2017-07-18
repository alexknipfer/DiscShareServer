const express = require('express')
const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const schema = require('./schemas/index')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const config = require('./config')

const app = express()

const port = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP(req => ({
    schema: schema,
    rootValue: {
      db: req.app.locals.db
    },
    graphiql: true
  }))
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
      console.log(`Running a GraphQL API server at ${port}`)
    })
  })
