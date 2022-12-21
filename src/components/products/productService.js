const product = require('./productModel');


exports.getAllProduct = async() =>{
    const products = await product.find({});
    return products;
}