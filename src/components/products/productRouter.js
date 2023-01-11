const express = require('express');
const router = express.Router();
const productController = require('./productController');


router.get('/list', productController.getProductByPage);
router.get('/', productController.getAll);
router.get('/:id', productController.getDetail);

router.get('/filterByPrice', productController.filterByPrice);

// hhman render
// router.get('/:id', productController.productDetail);



module.exports = router;
