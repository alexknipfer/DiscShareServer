const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')
const sharedTypes = require('./sharedTypes')
const register = require('./register')
const login = require('./login')
const getUser = require('./getUser')
const editUser = require('./editUser')

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
    editUser.editUserTypeDef
  ],
  resolvers: merge(
    rootResolvers,
    sharedTypes.sharedTypesResolver,
    register.registerResolver,
    login.loginResolver,
    getUser.getUserResolver,
    editUser.editUserResolver
  )
})

module.exports = schema
