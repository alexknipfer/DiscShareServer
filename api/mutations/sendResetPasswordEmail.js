const jwt = require('jsonwebtoken')
const ObjectId = require('mongodb').ObjectId
const cuid = require('cuid')
const moment = require('moment')
const mailgunClient = require('../../lib/clients/MailgunClient')

const mailgun = new mailgunClient()

const sendResetPasswordEmail = async ({ db }, { email }) => {
  const userCollection = db.collection('users')

  const user = await userCollection.findOne({
    email
  })

  if (!user) {
    throw new Error('No user is assosiated with this email.')
  }

  const passwordResetToken = cuid()

  await userCollection.updateOne(
    { _id: new ObjectId(user._id) },
    {
      $set: {
        passwordResetToken,
        passwordResetExpiration: moment()
          .add(1, 'hour')
          .format()
      }
    }
  )

  const passwordResetUrl = `http://localhost:3000/resetPassword?token=${passwordResetToken}`

  const messageConfig = {
    to: email,
    subject: 'Disc Share Password Reset',
    text: `Click the following link to reset your password. ${passwordResetUrl}`
  }

  await mailgun.sendEmail(messageConfig)

  return true
}

module.exports = sendResetPasswordEmail
