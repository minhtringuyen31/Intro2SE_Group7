const express = require('express');
const router = express.Router();
const productController = require('./productController');

// router.get('/', function (req, res) {
//     res.
// })

router.get('/', productController.productList);
