require('dotenv').config()
const app = require('./app')
const connectDB = require('./db/mongodb')
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