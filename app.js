const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')
const MongoClient = require('mongodb').MongoClient

var account = require('./routes/account')
var upload = require('./routes/upload')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/account', account)
app.use('/api/upload', upload)

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
    console.log(`> Server now running on http://localhost:${app.get('port')}`)
  })

module.exports = app
