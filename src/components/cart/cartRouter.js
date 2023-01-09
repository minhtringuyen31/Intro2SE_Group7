const express = require('express');
const router = express.Router();

/* GET cart page. */
router.get('/', function (req, res, next) {
  //throw new Error('Unknown error!');
  res.render('cart/cart');
});


module.exports = router;