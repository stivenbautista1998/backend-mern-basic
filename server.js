require('dotenv').config()

// Config of all the app
const app = require('./app')
// return a fuction to connect mongodb database
const connectDB = require('./db/mongodb')
// private keys of config
const { appConfig, dbConfig } = require('./config')

// Conect to MongoDB
async function startApp(appConfig, dbConfig) {
    try {
        await connectDB(dbConfig)
        app.listen(appConfig.port, () => console.log(`server stared on port ${appConfig.port}`))    
    } catch (err) {
        console.error(err)
        process.exit(0) //Salir (cerrar) de la app
    }
}

startApp(appConfig, dbConfig)