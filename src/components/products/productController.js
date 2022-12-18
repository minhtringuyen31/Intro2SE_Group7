const productService = require('./productService');


// xử lý truyền qua view

exports.getAllProduct = async (req, res) => {
    try {
        const products = await productService.getAllProduct();
        // Chỉnh lại cái title ở main.js khi reload
        res.render('index', { title: 'Product - hhman', products });
    } catch (error) {
        console.log(error)
        res.satus(500).send(message, error.message || "Error Occured");
    }
}