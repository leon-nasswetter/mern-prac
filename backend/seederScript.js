require("dotenv").config()

const productsData = require("./data/products")
const connectDB = require("./config/db-config")
const Product = require("./models/Product")

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany({})

        await Product.insertMany(productsData)

        console.log("data import success")

        process.exit()
    } catch (err) {
        console.error("error with importing data")
        console.log(err.stack)
        process.exit(1)
    }
}

importData()