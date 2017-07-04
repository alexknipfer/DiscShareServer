const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')

const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  const db = req.app.locals.db

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

module.exports = router
