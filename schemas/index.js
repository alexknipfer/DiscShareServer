const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')
const testSchema = require('./testSchema')
const register = require('./register')

const rootSchema = `
  type Query {
    version: String!
  }
  type Mutation {
    version: String!
  }
  schema {
    query: Query
    mutation: Mutation
  }
`

const rootResolvers = {
  Query: {
    version: () => require('../package.json').version
  },
  Mutation: {
    version: () => require('../package.json').version
  }
}

const schema = makeExecutableSchema({
  typeDefs: [rootSchema, testSchema.testTypeDef, register.registerTypeDef],
  resolvers: merge(
    rootResolvers,
    testSchema.testResolver,
    register.registerResolver
  )
})

module.exports = schema
