require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Sweet! MongoDB connection successful")
    } catch (err) {
        console.error("something went wrong connecting MongoDB")
        console.log(err.stack)
        process.exit(1)
    }
}

module.exports = connectDB