const ObjectId = require('mongodb').ObjectId

const getUserById = async ({ db }, { userId }) => {
  const user = await db
    .collection('users')
    .findOne({ _id: new ObjectId(userId) })

  return user
}

module.exports = getUserById
