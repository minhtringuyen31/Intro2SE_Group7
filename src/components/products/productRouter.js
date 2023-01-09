const express = require('express');
const router = express.Router();
const productController = require('./productController');

router.get('/', productController.productList);
// router.get('/detail', productController.productDetail);



module.exports = router;
