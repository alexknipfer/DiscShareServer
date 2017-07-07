const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')

const router = express.Router()

router.get('/', (req, res, next) => {
  const { db } = req.app.locals

  var s = db.collection('users').find().toArray((err, docs) => {
    res.send({ docs })
  })

  db.close()
})

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body
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
    await usersCollection.insertOne({ username: username, password: hashPass })
    const userAdded = await usersCollection.findOne({ username: username })

    console.log(userAdded)
    const token = jwt.sign(userAdded, config.JWT_SECRET, {
      expiresIn: 60 * 60 * 24
    })
    res.send({ token: token })
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
      res.send({ token: token })
      res.end()
    } else {
      next(new Error('The password you entered was incorrect.'))
    }
  } else {
    next(new Error('The username you entered was incorrect'))
  }
})

module.exports = router
