const ObjectId = require('mongodb').ObjectId

const getUserById = async ({ db }, { userId }) => {
  const user = await db
    .collection('users')
    .findOne({ _id: new ObjectId(userId) })

  console.log('USER in getUserById: ', user)
}

module.exports = getUserById
