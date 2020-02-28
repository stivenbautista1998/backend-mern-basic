const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductsSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    drescription: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Products', ProductsSchema)
