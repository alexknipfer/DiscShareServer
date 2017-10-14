const jwt = require('jsonwebtoken')
const ObjectId = require('mongodb').ObjectId
const cuid = require('cuid')
const moment = require('moment')

const resetPassword = async ({ db }, { password, token }) => {
  const userCollection = db.collection('users')
  console.log('password: ', password)
  console.log('token: ', token)
}

module.exports = resetPassword
