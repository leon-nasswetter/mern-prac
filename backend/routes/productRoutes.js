const router = require("express").Router()

const { getAllProducts, getProductById } = require("../controller/productControllers")

//GET /api/products all products from db
router.get("/", getAllProducts)

//GET /api/products/:id get product by id
router.get("/:id", getProductById)

module.exports = router