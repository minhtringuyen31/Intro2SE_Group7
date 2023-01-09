const cartService = require('./cartService');

exports.showCart = (req, res) => {
    try {
        console.log("Product Details");

        // require information of product
        // res.render('products/productDetails', {style: 'product_detail', layout: 'layout' });
        console.log('Render Successfully !');

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}