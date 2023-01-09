const express = require('express');
const router = express.Router();
const productController = require('./productController');


router.get('/list', productController.getProductByPage);
router.get('/', productController.getAll);


module.exports = router;
