const jwt = require('jsonwebtoken')
const ObjectId = require('mongodb').ObjectId

const editAccount = async ({ db }, { userId, email, firstName }) => {
  const userCollection = db.collection('users')

  await userCollection.updateOne(
    { _id: new ObjectId(userId) },
    { $set: { email } }
  )

  const updatedUser = await userCollection.findOne({
    _id: new ObjectId(userId)
  })

  const token = jwt.sign(updatedUser, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  })

  return token
}

module.exports = editAccount
