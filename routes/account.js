const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  const db = req.app.locals.db

  var s = db.collection('users').find().toArray((err, docs) => {
    res.send({ docs })
  })

  db.close()
})

router.post('/register', (req, res) => {
  const { username, password } = req.body
  const { db } = req.app.locals
  const saltRounds = 10

  const hashPass = bcrypt.hashSync(password, saltRounds)

  const usersCollection = db.collection('users')

  usersCollection.insertOne(
    { username: username, password: hashPass },
    (err, r) => {
      if (err) {
        console.log('INSERT USER ERROR ', err)
        res.end(err)
      } else {
        res.end('Added Successfully!')
      }
      db.close()
    }
  )
})

module.exports = router
