const express = require('express');
const router = express.Router();
const authController = require('./authController');
const { authenticate } = require('./passport');
const passport = require('./passport');

router.get('/login', function (req, res) {
    res.render('auth/logIn', { layout: false });
});

router.post('/login', passport / authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/auth/login'
}));

router.get('signup', function (req, res, next) {
    res.render('auth/signUp', { layout: false });
});

router.post('/signup', authController.signup);