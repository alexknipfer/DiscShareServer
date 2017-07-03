var express = require('express')
var router = express.Router()

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
  const db = req.app.locals.db
  const usersCollection = db.collection('users')

  usersCollection.insertOne(
    { username: username, password: password },
    (err, r) => {
      if (err) {
        console.log('INSERT USER ERROR ', err)
      } else {
        res.end('Added Successfully!')
      }
      db.close()
    }
  )
})

module.exports = router
