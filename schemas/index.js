const { makeExecutableSchema } = require('graphql-tools')
const testSchema = require('./testSchema')

const rootSchema = `
  type Query {
    version: String!
  }
  schema {
    query: Query
  }
`

const rootResolvers = {
  Query: {
    version: () => require('../package.json').version
  }
}

const schema = makeExecutableSchema({
  typeDefs: [rootSchema, testSchema.testTypeDef],
  resolvers: testSchema.testResolver
})

module.exports = schema
