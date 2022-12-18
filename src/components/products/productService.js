const product = require('./productModel');

// lấy dữ liệu
/**
 * async()
 * arrow function
 * exports = : tham chiếu trong một cùng nhớ mới
 * exports. : bổ sung phương thức
 * module.exports vs export cùng trỏ vào một vùng nhớ
 * promise: --> xử lý các thao tác bất đồng bộ
 *  - Sync: đồng bộ  chạy theo luồng
 *  - Async: không theo luồng
 *  - callback hell: 
 * js: đơn luồng, nhưng vẫn xử lý đa luồng
 */


exports.getAllProduct = async() =>{
    const products = await product.find({});
    return products;
}