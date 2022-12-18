const productModel = require('./productModel');

const mongoose = require('mongoose');
mongoose.connect(process.env.MOGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Connected to group 07 database to get Product');
});

// lấy xử lý data

async function insertProductData() {
    try {
        await productModel.insertMany([
            {
                "id": "PM1",
                "name": "Bảng phấn mắt các màu cơ bản innisfree Essential Shadow Palette 8.3 ~ 8.7 g",
                "signature": "Innisfree",
                "origin": "Hàn Quốc",
                "factory": "Hàn Quốc",
                "skin": "",
                "problem": "",
                "price": "700000",
                "img" :""
            }
        ]);
    } catch (error) {
        console.log('err', + error)
    }
}
