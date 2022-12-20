const { productList } = require('./productModel');

exports.getAll = () => {
    return productList;
};
