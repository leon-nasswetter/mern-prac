const Product = require("../models/Product")

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error getting products"})
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error getting product by id"})
    }
}

module.exports = { getAllProducts, getProductById }