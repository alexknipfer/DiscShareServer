var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log('hello')
  res.json({
    id: 1,
    username: 'hello there'
  })
})

module.exports = router
