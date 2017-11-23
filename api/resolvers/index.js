const Mutation = require('./Mutation')
const Query = require('./Query')
const User = require('./User')
const Disc = require('./Disc')
const Subscription = require('./Subscription')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Disc
}

module.exports = resolvers
