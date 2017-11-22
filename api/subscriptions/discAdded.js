const { PubSub, withFilter } = require('graphql-subscriptions')

const pubsub = new PubSub()

const discAdded = () => {
  subscribe: withFilter(
    () => pubsub.asyncIterator('discAdded'),
    (payload, variables) => {
      return payload.createdBy === variables.createdBy
    }
  )
}

module.exports = discAdded
