var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.DB_CONNECTION_STRING, {
  useMongoClient: true
})

let db = mongoose.connection

db.once('open', () => {
  console.log('Connected to MongoDB')
})

db.on('error', err => {
  console.log(err)
})

var users = require('./routes/users')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/users', users)

module.exports = app
