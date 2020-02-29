const express = require('express')
const productsRoutes = require('./routes/products')
const bodyParser = require('body-parser')

const app = express()

// bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// __dirname = It gives you the path of the currently running file
app.use('/public', express.static(`${__dirname}/storage/imgs`))

// create API
app.use('/v1', productsRoutes)

module.exports = app