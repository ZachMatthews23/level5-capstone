require('dotenv').config()

const productsData = require('./data/products')
const connectDB = require('./config/database')
const Product = require('./models/Product')


connectDB()

const importData = async () => {
    try{
        //clears database to ensure there is no duplicate data or wrong data
        await Product.deleteMany({})
        //inserts the data from the data folder to the DB 
        await Product.insertMany(productsData)

        console.log('Data import Successful')
        process.exit()
    }catch {
        console.error('Data import Failed')
        process.exit(1)
    }
}

importData()

//feeds the product data from backend to the frontend 
//process.exit command that stops process once completed 