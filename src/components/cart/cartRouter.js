const express = require('express');
const router = express.Router();
const cartController = require('./cartController');

router.get('/', cartController.showCart);

router.get('/add-to-cart/:idProduct', cartController.addToCart);
router.get('/remove/:idProduct', cartController.removeFromCart);

// router.get('/checkout', cartController.showCheckout);

module.exports = router;
