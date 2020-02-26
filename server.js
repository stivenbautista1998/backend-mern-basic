require('dotenv').config()

const express = require('express')
const connectDB = require('./db/mongodb')
const { appConfig, db } = require('./config')

const bodyParser = require('body-parser')
const app = express()

// bodyparser Middleware
app.use(bodyParser.json())

connectDB(db)
app.listen(appConfig.port, () => console.log(`server on port ${appConfig.port}`))
