const express = require('express');
const router = express.Router();
const cartController = require('./cartController');

router.get('/', function (req, res, next) {
    res.render('cart/cart');
});

router.get('/add-to-cart/:idProduct', cartController.addToCart);
router.get('/remove/:idProduct', cartController.removeFromCart);

router.get('/checkout', cartController.showCheckout);
module.exports = router;
