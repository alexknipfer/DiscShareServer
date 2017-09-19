const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')

const addDiscSchema = require('./schemas/addDisc')
const editAccountSchema = require('./schemas/editAccount')
const getUserSchema = require('./schemas/getUser')
const loginSchema = require('./schemas/login')
const registerSchema = require('./schemas/register')
const discsSchema = require('./schemas/discs')
const discsByLocationSchema = require('./schemas/discsByLocation')
const sharedTypesSchema = require('./schemas/sharedTypes')

const addDiscResolver = require('./resolvers/addDisc')
const editAccountResolver = require('./resolvers/editAccount')
const getUserResolver = require('./resolvers/getUser')
const loginResolver = require('./resolvers/login')
const registerResolver = require('./resolvers/register')
const discsResolver = require('./resolvers/discs')
const discsByLocationResolver = require('./resolvers/discsByLocation')
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
    addDiscSchema,
    editAccountSchema,
    getUserSchema,
    loginSchema,
    registerSchema,
    discsSchema,
    discsByLocationSchema,
    sharedTypesSchema
  ],
  resolvers: merge(
    rootResolvers,
    addDiscResolver,
    editAccountResolver,
    getUserResolver,
    loginResolver,
    registerResolver,
    discsResolver,
    discsByLocationResolver,
    sharedTypesResolver
  )
})

module.exports = schema
