const express = require('express')

const router = express.Router()

const {getAllProducts,  getProductById} = require('../controller/productControllers')

//get all products//

router.get('/', getAllProducts)

//get by product id//

router.get('/:id', getProductById)

module.exports = router
