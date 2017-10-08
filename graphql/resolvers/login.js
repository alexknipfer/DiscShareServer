const bcyrpt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginResolver = {
  Mutation: {
    login: async ({ db }, { username, password }) => {
      const userCollection = db.collection('users')
      const user = await userCollection.findOne({ username: username })

      if (user) {
        const found = bcyrpt.compareSync(password, user.password)

        if (found) {
          const token = jwt.sign(user, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
          })
          return token
        } else {
          throw new Error('The password you entered was incorrect.')
        }
      } else {
        throw new Error('The username you entered was incorrect.')
      }
    }
  }
}

module.exports = loginResolver
