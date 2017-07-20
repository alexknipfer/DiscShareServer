const registerTypeDef = `
  extend type Mutation {
    register(email: String!, username: String!, password: String!): String
  }
`

module.exports = registerTypeDef
