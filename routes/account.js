const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')
const ObjectId = require('mongodb').ObjectID

const router = express.Router()

router.post('/register', async (req, res, next) => {
  const { email, username, password } = req.body
  const { db } = req.app.locals
  const saltRounds = 10

  const hashPass = bcrypt.hashSync(password, saltRounds)

  const usersCollection = db.collection('users')

  const duplicateUser = await usersCollection
    .find({ username: username })
    .count()

  if (duplicateUser >= 1) {
    next(new Error('This username is already taken.'))
  } else {
    await usersCollection.insertOne({
      email: email,
      username: username,
      password: hashPass
    })
    const userAdded = await usersCollection.findOne({ username: username })

    console.log(userAdded)
    const token = jwt.sign(userAdded, config.JWT_SECRET, {
      expiresIn: 60 * 60 * 24
    })
    res.send({ token })
  }
})

router.post('/loginWithUsername', async (req, res, next) => {
  const { username, password } = req.body
  const { db } = req.app.locals
  const saltRounds = 10

  const usersCollection = db.collection('users')

  const user = await usersCollection.findOne({ username: username })

  if (user) {
    const found = bcrypt.compareSync(password, user.password)

    if (found) {
      const token = jwt.sign(user, config.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
      })
      res.send({ token })
      res.end()
    } else {
      next(new Error('The password you entered was incorrect.'))
    }
  } else {
    next(new Error('The username you entered was incorrect'))
  }
})

router.post('/getUserData', async (req, res, next) => {
  const { token } = req.body
  const { db } = req.app.locals

  const user = jwt.decode(token, config.JWT_SECRET)
  console.log('USER: ', user)
  res.send({ user })
})

router.post('/editAccount', async (req, res, next) => {
  const { userId, email, firstName, location } = req.body
  const { db } = req.app.locals

  const userCollection = db.collection('users')

  await userCollection.updateOne(
    { _id: new ObjectId(userId) },
    { $set: { email } }
  )

  const updatedUser = await userCollection.findOne({
    _id: new ObjectId(userId)
  })

  const token = jwt.sign(updatedUser, config.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  })

  res.send({ token })
})

module.exports = router
