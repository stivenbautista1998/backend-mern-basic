const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductsSchema = Schema({
    name: String,
    unitaryPrice: Number,
    imgUrl: String,
    description: String,
    size: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', ProductsSchema)
