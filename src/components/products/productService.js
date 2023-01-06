
// const { productList } = require('./productModel');

// exports.getAll = () => {
//     return productList;
// };
// =======
const product = require('./productModel');


exports.getAll = async () => {
    try {
        const result = await product.find({});
        console.log("product");
        console.log(result);
        return result;
    } catch {
        console.log("Cannot get data from db");
        return;
    }
}
