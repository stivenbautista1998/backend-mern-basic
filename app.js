const express = require('express')
const productsRoutes = require('./routes/products')
const bodyParser = require('body-parser')

const app = express()

// bodyparser Middleware
app.use(bodyParser.json())

// create API
app.use('/v1', productsRoutes)

module.exports = app