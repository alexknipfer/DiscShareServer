const Subscription = `
  type Subscription {
    discAdded(createdBy: ID!): Disc
  }
`

module.exports = Subscription
