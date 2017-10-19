const ObjectId = require('mongodb').ObjectId

const getUserById = async ({ db }, { userId }) => {
  return await db.collection('users').findOne({ _id: new ObjectId(userId) })
}

module.exports = getUserById
