const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const app = express()

const jwtAuth = require('./jwt-authentication')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const loginRoute = require('../app/routes/login-routes')
loginRoute(app)

app.use(jwtAuth())

consign()
    .include('./src/app/routes/routes.js')
    .into(app)

module.exports = app