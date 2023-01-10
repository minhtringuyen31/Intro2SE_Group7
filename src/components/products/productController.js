const productService = require('./productService');


exports.productList = (req, res) => {
    try {
        console.log("get data");
        const result = productService.getAll();

        console.log("get all" + result);

        res.render('products/productList', { result, layout: 'layout' });
        // res.render('user/products/list', { result, originalUrl, layout: 'layout.hbs' });
        console.log('Render Successfully !');

    } catch (err) {
        console.log(err);
    }
}

