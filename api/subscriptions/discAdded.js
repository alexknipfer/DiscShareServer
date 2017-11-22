const socket = require('../../lib/socket')
const { withFilter } = require('graphql-subscriptions')

const discAdded = () => {
  subscribe: withFilter(
    () => socket.asyncIterator('DISC_ADDED'),
    (payload, variables) => {
      console.log('payload: ', payload)
      return payload.createdBy === variables.createdBy
    }
  )
}

module.exports = discAdded
