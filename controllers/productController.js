const Products = require('../models/Products')

async function addProduct (req, res) {
    try {
        const { name, unitaryPrice, description, size } = req.body
        const product = Products({
            name, 
            unitaryPrice, 
            description, 
            size
        })

        if(req.file) {  // if there is eny image in the request
            const { filename } = req.file
            product.setImgUrl(filename)
        }
        
        const productStored = await product.save()
        res.status(200).send({ productStored })    
    } catch (err) {
        res.status(404).send({ failed: err.message })
    }
}

async function getProducts(req, res) {
    const products = await Products.find().lean().exec()
    res.status(200).send({ products })
}

function deleteProduct(req, res) {
    Products.findById(req.params.id).then((product) => product.remove()
        .then(() => res.status(200).send({ success: true })))
        .catch(() => res.status(404).send({ success: false }))
}

module.exports = {
    addProduct,
    getProducts,
    deleteProduct
}