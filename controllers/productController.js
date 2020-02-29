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
        res.status(201).send({ productStored })    
    } catch (err) {
        res.status(500).send({ failed: err.message })
    }
}

module.exports = {
    addProduct
}