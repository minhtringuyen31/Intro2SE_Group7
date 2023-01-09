const express = require('express');
const router = express.Router();

/* GET checkout page. */
router.get('/', function (req, res, next) {
  //throw new Error('Unknown error!');
  res.render('cart/checkout');
});


module.exports = router;