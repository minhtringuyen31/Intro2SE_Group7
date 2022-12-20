// const productList =
//     [
//         {
//             product_ID: '000001',
//             product_name: "Latte den",
//             product_img: "/img/product/PM1.jpg",
//             product_price: "30000",
//             product_type: "coffee",
//             relative_products: [
//                 "000002", "000003"
//             ]
//         },

//         {
//             product_ID: '000002',
//             product_name: "Mocha Macchiato",
//             product_img: "/img/product/PM2.jpg",
//             product_price: "69000",
//             product_type: "coffee",
//             relative_products: [
//                 "000003", "000001"
//             ]
//         },

//         {
//             product_ID: '000003',
//             product_name: "Bac xiu",
//             product_img: "/img/product/PM3",
//             product_price: "30000",
//             product_type: "coffee",
//             relative_products: [
//                 "000001", "000002"
//             ]
//         },

//         {
//             product_ID: '000004',
//             product_name: "Black capuccino",
//             product_img: "/img/product/PM4.jpg",
//             product_price: "40000",
//             product_type: "coffee",
//             ralative_product: [
//                 "000001", "000002", "000003"
//             ]
//         }
//     ]


// exports.productList = productList;

const mongoose = require('mongoose');;

const productSchema = mongoose.Schema({
    productID: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productStatus: {
        type: String,
        required: true,
        default: 'available',
    }
});

module.exports = mongoose.model("Product", productSchema);