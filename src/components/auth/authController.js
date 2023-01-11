const passport = require('passport');
const authService = require('./authService');

exports.signup = async (req, res, next) => {
    console.log(req.body);
    const { userName, userEmail, userPassword } = req.body;
    if (authService.checkSignUpFormat(req.body) === false) {
        res.render('auth/sign', { layout: false });
        return;
    }
    const check = await authService.isExistedAccount(userEmail);
    if (check == true) {
        res.render('auth/sign', { layout: false });
        console.log("User existed");
        return;
    } else {
        console.log("user not exist")
        authService.register(req.body);
        res.redirect('/auth/sign');
    }
}

exports.logout = (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/index');
    });
};

exports.verifyEmail = async (req, res) => {
    const { email } = req.params;
    const result = await authService.isExistedAccount(email);
    res.json(!result);
}