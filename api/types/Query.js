const Query = `
  type Query {
    discs(userId: String): [Disc]
    discsByLocation(longitude: String, latitude: String, radius: Int): [Disc]
    getUser(accesstoken: String): User
    getUserById(userId: ID!): User
  }
`

module.exports = Query
