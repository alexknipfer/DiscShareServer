var express = require('express')
var router = express.Router()
const UserModel = require('../db/models/UserModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log('hello')
  UserModel.find((err, users) => console.log(users))
  /*res.json({
    id: 1,
    username: 'hello there'
  })*/
})

module.exports = router
