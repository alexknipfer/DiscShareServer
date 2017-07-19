const sharedTypesTypeDef = `
  type User {
    id: ID
    email: String
    username: String
    password: String
  }
`

const sharedTypesResolver = {
  User: {
    id: ({ _id }) => _id
  }
}

module.exports = {
  sharedTypesTypeDef,
  sharedTypesResolver
}
