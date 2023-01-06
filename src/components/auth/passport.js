const passport = require('passport');
const LocalStrategy = require('passport-local');
const authService = require('./authService');


passport.use(new LocalStrategy({ usernameField: 'email' }, async function verify(email, password, cb) {
    console.log(email);
    console.log(password);
    const user = await authService.signIn(email, password);
    console.log(user);
    if (user) {
        console.log("success");
        return cb(null, user);
    }
    else {
        console.log("failure");
        return cb(null, false);
    }
}));

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { loginEmail: user.userEmail, loginName: user.userName, loginAddress: user.userAddress });
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

module.exports = passport;