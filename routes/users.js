var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  const db = req.app.locals.db

  var s = db.collection('users').find().toArray((err, docs) => {
    res.send({ docs })
  })
})

module.exports = router
