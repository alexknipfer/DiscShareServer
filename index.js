const express = require('express')
const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const { buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'Hello World'
  }
}

const app = express()

const port = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)

app.listen(port)
console.log(`Running a GraphQL API server at ${port}`)
