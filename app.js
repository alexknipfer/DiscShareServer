var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var users = require('./routes/users')

var app = express()

const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/users', users)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port)
console.log('Server Started')

module.exports = app
