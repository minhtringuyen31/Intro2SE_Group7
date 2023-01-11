const express = require('express');
const router = express.Router();
const productController = require('./productController');


router.get('/list', productController.getProductByPage);
router.get('/', productController.getAll);
router.get('/:id', productController.getDetail);

router.get('/filterByPrice/:option', productController.filterByPrice);
router.get('/filterByBrand/:option', productController.filterByBrand);
router.get('/filterByCategory/:option', productController.filterByCategory);
router.post('/search', productController.search);



// hhman render
// router.get('/:id', productController.productDetail);



module.exports = router;
