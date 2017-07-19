const jwt = require('jsonwebtoken')
const config = require('../config')

const editUserTypeDef = `
    extend type Mutation {
        editUser(userId: ID, email: String!, firstName: String!): String
    }
`

const editUserResolver = {
    Mutation: {
        editUser: async ({ db }, { userId, email, firstName }) => {
            const userCollection = db.collection('users')

            await userCollection.updateOne(
                { _id: new ObjectId(userId) },
                { $set: { emai } }
            )

            const updatedUser = await userCollection.findOne({
                _id: new ObjectId(userId)
            })

            const token = jwt.sign(updatedUser, config.JWT_SECRET, {
                expiresIn: 60 * 60 * 24
            })

            return token
        }
    }
}

module.exports = {
    editUserTypeDef,
    editUserResolver
}