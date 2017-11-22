const Disc = require('./Disc')
const Location = require('./Location')
const Mutation = require('./Mutation')
const Query = require('./Query')
const Subscription = require('./Subscription')
const Schema = require('./Schema')
const User = require('./User')
const S3Payload = require('./S3Payload')

const types = [
  Disc,
  Location,
  Mutation,
  Query,
  Subscription,
  Schema,
  User,
  S3Payload
]

module.exports = types
