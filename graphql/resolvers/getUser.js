const jwt = require('jsonwebtoken')
const config = require('../../config')

const getUserResolver = {
  Query: {
    getUser: ({ db }, { accesstoken }) => {
      const user = jwt.decode(accesstoken, config.JWT_SECRET)
      return user
    }
  },
  User: {
    id: ({ _id }) => _id
  }
}

module.exports = getUserResolver