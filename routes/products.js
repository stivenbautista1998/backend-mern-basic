const express = require('express')
const upload = require('../libs/imgStorage')
const { addProduct, getProducts, deleteProduct } = require('../controllers/productController')

const api = express.Router()

// @route   Post v1/products
// @desc    Create a post
// @access  Public
api.post('/products', upload.single('image'), addProduct)

// @route   Get v1/products
// @desc    Create a get
// @access  Public
api.get('/products', getProducts)

// @route   Delete v1/products
// @desc    remove a product
// @access  Public
api.delete('/products/:id', deleteProduct)

module.exports = api