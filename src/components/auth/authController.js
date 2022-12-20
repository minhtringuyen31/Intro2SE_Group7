const authService = require('./authService');

exports.signup = async (req, res, next) => {
    console.log(req.body);
    if (authService.checkSignUpFormat(req.body) === false) {
        res.render('auth/signUp', { layout: false });
        return;
    }
    const check = await authService.isExistedAccount(req.body);
    if (check == true) {
        res.render('auth/signup', { layout: false });
        return;
    } else {
        authService.register(req.body);
        res.redirect('auth/logIn');
    }
}