// loads enviroment variables from .env file
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/database')
const productRoutes = require('./routes/productRoutes')
const morgan = require('morgan')

// function that connects to MongoDB
connectDB()

const app = express()

//middleware for requests
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/products', productRoutes )

// accessing .env to get Port info
const PORT = process.env.PORT || 5000

app.listen (PORT, () => console.log(`Server running on port ${PORT}`))