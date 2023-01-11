const cartService = require('./cartService');


exports.showCart = (req, res) => {
    if (!req.user) {
        res.redirect('/auth/sign');
    }
    else {
        res.render('cart/cart');
    }
}

exports.addToCart = async (req, res) => {
    const idProduct = req.params.idProduct;
    console.log("userEmail: " + req.user.loginEmail);
    console.log("idProduct: " + req.params.idProduct);
    await cartService.addToCart(req.user.loginEmail, idProduct);
}

exports.removeFromCart = async (req, res) => {
    if (!req.user) {
        return;
    }
    const idProduct = req.params.idProduct;
    console.log("remove ID: " + idProduct);
    await cartService.removeFromCart(req.user.loginEmail, idProduct);
}