const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')

const editAccountSchema = require('./schemas/editAccount')
const getUserSchema = require('./schemas/getUser')
const loginSchema = require('./schemas/login')
const registerSchema = require('./schemas/register')
const sharedTypesSchema = require('./schemas/sharedTypes')

const editAccountResolver = require('./resolvers/editAccount')
const getUserResolver = require('./resolvers/getUser')
const loginResolver = require('./resolvers/login')
const registerResolver = require('./resolvers/register')
const sharedTypesResolver = require('./resolvers/sharedTypes')

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
  typeDefs: [
    rootSchema,
    editAccountSchema,
    getUserSchema,
    loginSchema,
    registerSchema,
    sharedTypesSchema
  ],
  resolvers: merge(
    rootResolvers,
    editAccountResolver,
    getUserResolver,
    loginResolver,
    registerResolver,
    sharedTypesResolver
  )
})

module.exports = schema
