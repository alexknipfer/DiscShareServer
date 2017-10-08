const jwt = require('jsonwebtoken')

const getUserResolver = {
  Query: {
    getUser: ({ db }, { accesstoken }) => {
      const user = jwt.decode(accesstoken, process.env.JWT_SECRET)
      console.log('USER: ', user)
      return user
    }
  },
  User: {
    id: ({ _id }) => _id
  }
}

module.exports = getUserResolver
