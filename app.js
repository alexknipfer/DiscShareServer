var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const config = require('./config')
const MongoClient = require('mongodb').MongoClient

var account = require('./routes/account')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/account', account)

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message)
  next()
})

MongoClient.connect(config.DB_CONNECTION_STRING, {
  promiseLibrary: Promise
})
  .catch(err => console.error(err.stack))
  .then(db => {
    app.locals.db = db
    console.log('Database Connection Successful')
  })

module.exports = app
