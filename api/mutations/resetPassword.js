const jwt = require('jsonwebtoken')
const ObjectId = require('mongodb').ObjectId
const cuid = require('cuid')
const moment = require('moment')
const bcrypt = require('bcrypt')

const resetPassword = async ({ db }, { password, token }) => {
  const userCollection = db.collection('users')

  const user = await userCollection.findOne({
    passwordResetToken: token
  })

  if (!user) {
    throw new Error('Password reset link is invalid.')
  }

  const timeOffset = moment().isAfter(user.passwordResetExpiration)

  if (timeOffset) {
    throw new Error('Password reset link is invalid or expired.')
  }

  const saltRounds = 10
  const hash = bcrypt.hashSync(password, saltRounds)

  await userCollection.updateOne(
    { passwordResetToken: token },
    {
      $set: {
        password: hash,
        passwordResetToken: null,
        passwordResetExpiration: null
      }
    }
  )

  const updatedUser = await userCollection.findOne({ username: user.username })
  const jwtToken = jwt.sign(updatedUser, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  })

  return jwtToken
}

module.exports = resetPassword
