const jwt = require('jsonwebtoken')
const config = require('../config')

const getUserTypeDef = `
  extend type Query {
    getUser(accesstoken: String): User
  }
`

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

module.exports = {
  getUserTypeDef,
  getUserResolver
}
