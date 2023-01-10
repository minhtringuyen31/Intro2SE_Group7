const productService = require('../products/productService');
const cartRepository = require('./cartRepository');

exports.addToCart = async (_userPhone, _idProduct) => {
    const quantity = await cartRepository.hasProduct(_userPhone, _idProduct);
    if (quantity === -1 || quantity === null) {
        await cartRepository.addProductToCart(_userPhone, _idProduct);
    }
    else {
        await cartRepository.updateQuantity(_userPhone, _idProduct, quantity + 1)
    }
}
