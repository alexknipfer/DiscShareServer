const loginTypeDef = `
  extend type Mutation {
    login(username: String!, password: String!): String
  }
`

module.exports = loginTypeDef
