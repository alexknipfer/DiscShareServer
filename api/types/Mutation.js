const Mutation = `
  type Mutation {
    addDisc(discName: String!, locationDescription: String!, latitude: String!, longitude: String!, nameOnDisc: String, userId: String!, discImage: String): Disc
    editAccount(userId: ID, email: String!, firstName: String!, location: String!, profileImage: String!): String
    login(username: String!, password: String!): String
    register(email: String!, username: String!, password: String!): String
    sendResetPasswordEmail(email: String!): Boolean
    resetPassword(password: String!, token: String!): String
    signS3(filename: String!, filetype: String!): S3Payload!
  }
`

module.exports = Mutation
