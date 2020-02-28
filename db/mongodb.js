const mongoose = require('mongoose')
mongoose.connection.once('open', () => console.log(`DB connected!!`))

async function conectDB({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = conectDB