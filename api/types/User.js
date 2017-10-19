const User = `
  type User {
    id: ID
    email: String
    username: String
    password: String
    passwordResetToken: String
    passwordResetExpiration: String
    firstName: String
    profileImage: String
  }
`

module.exports = User
