const express = require('express');
const router = express.Router();
const productController = require('./productController');

router.get('/', productController.productList);

// hhman render
router.get('/:id', productController.productDetail);

module.exports = router;
