const Mutation = `
  type Mutation {
    addDisc(discName: String!, locationDescription: String!, latitude: String!, longitude: String!, nameOnDisc: String, userId: String!): Disc
    editAccount(userId: ID, email: String!, firstName: String!, location: String!): String
    login(username: String!, password: String!): String
    register(email: String!, username: String!, password: String!): String
  }
`

module.exports = Mutation
