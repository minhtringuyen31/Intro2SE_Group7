const express = require('express');
const router = express.Router();

/* GET payment page. */
router.get('/', function (req, res, next) {
  //throw new Error('Unknown error!');
  res.render('cart/payment');
});


module.exports = router;