const getUserTypeDef = `
  extend type Query {
    getUser(accesstoken: String): User
  }
`

module.exports = getUserTypeDef
