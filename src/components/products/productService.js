
// const { productList } = require('./productModel');

// exports.getAll = () => {
//     return productList;
// };
// =======
const product = require('./productModel');


exports.getAll = async () => {
    const result = await product.find({});
    console.log("product");
    console.log(result);
    return result;
}
