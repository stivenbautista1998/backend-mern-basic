const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { appConfig } = require('../config')

const ProductsSchema = Schema({
    name: String,
    unitaryPrice: Number,
    imgUrl: String,
    description: String,
    size: Number
}, {
    timestamps: true
})

ProductsSchema.methods.setImgUrl = function setImgUrl(namefile) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${namefile}`
}

module.exports = mongoose.model('Products', ProductsSchema)
