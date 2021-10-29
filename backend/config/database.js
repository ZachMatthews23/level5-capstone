// connects to the mongodb database

require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            // accesses .env which acesses mongoDB
            
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
        console.log("Connected to the database")

    }catch(error) {
        console.log("Database connection FAILED")
        process.exit(1)
    }
}

module.exports = connectDB

// configuring database with mongoose, async makes server load faster
// dotenv loads variable through .env file