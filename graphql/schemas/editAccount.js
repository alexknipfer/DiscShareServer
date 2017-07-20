const editAccountTypeDef = `
    extend type Mutation {
        editAccount(userId: ID, email: String!, firstName: String!, location: String!): String
    }
`

module.exports = editAccountTypeDef
