const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //throw new Error('Unknown error!');
  res.render('auth/profiles', {layout: false});
});


module.exports = router;