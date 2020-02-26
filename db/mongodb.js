const mongoose = require('mongoose')

async function conectDB({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    console.log(uri)
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("DB connected!!")).catch(err => console.log(`DB connection error: ${err}`))
}

module.exports = conectDB