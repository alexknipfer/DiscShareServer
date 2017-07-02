var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var users = require('./routes/users')

var app = express()

const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/users', users)

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

var server = require('https').createServer(app)

server.listen(port, () => console.log('Listening on port ' + port))

module.exports = app
