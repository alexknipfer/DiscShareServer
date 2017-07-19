const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')
const sharedTypes = require('./sharedTypes')
const register = require('./register')
const login = require('./login')
const getUser = require('./getUser')
const editAccount = require('./editAccount')

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
    sharedTypes.sharedTypesTypeDef,
    register.registerTypeDef,
    login.loginTypeDef,
    getUser.getUserTypeDef,
    editAccount.editAccountTypeDef
  ],
  resolvers: merge(
    rootResolvers,
    sharedTypes.sharedTypesResolver,
    register.registerResolver,
    login.loginResolver,
    getUser.getUserResolver,
    editAccount.editAccountResolver
  )
})

module.exports = schema
