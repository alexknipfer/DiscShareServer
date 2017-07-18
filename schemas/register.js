const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')
const { GraphQL } = require('graphql')

const registerTypeDef = `
  extend type Mutation {
    register(email: String!, username: String!, password: String!): String
  }
`

const registerResolver = {
  Mutation: {
    register: async ({ db }, { email, username, password }) => {
      const userCollection = db.collection('users')
      const duplicateUser = await userCollection
        .find({ username: username })
        .count()

      if (duplicateUser >= 1) throw new Error('User already exists.')
      else {
        const saltRounds = 10
        const hash = bcrypt.hashSync(password, saltRounds)

        const data = {
          email,
          username,
          password: hash
        }
        await userCollection.insertOne(data)
        const newUser = await userCollection.findOne({ username: username })
        const token = jwt.sign(newUser, config.JWT_SECRET, {
          expiresIn: 60 * 60 * 24
        })
        return token
      }
    }
  }
}

module.exports = {
  registerTypeDef,
  registerResolver
}
