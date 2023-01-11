const express = require('express');
const router = express.Router();
const authController = require('./authController');
const { authenticate } = require('./passport');
const passport = require('./passport');

router.get('/sign', function (req, res, next) {
  res.render('auth/sign', { layout: false });
});

router.get('/logout', authController.logout);

router.post('/signin', passport.authenticate('local', {
  successRedirect: '/index',
  failureRedirect: '/auth/sign'
}));

router.post('/signup', authController.signup);

router.get('/verify-email/:email', authController.verifyEmail);

router.get('/forgotpass', function (req, res, next) {
  res.render('auth/forgotpass', { layout: false });
});

router.get('/profiles', function (req, res, next) {
  res.render('auth/profiles', { layout: false });
});
module.exports = router;