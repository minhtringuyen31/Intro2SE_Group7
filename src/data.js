const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MOGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Connected to group 07 database to get Product');
});
const coll = db.collection("product");

async function insertProductData() {
    try {
        const result = await coll.insertMany([
            {
                "id": "PM1",
                "name": "Bảng phấn mắt các màu cơ bản innisfree Essential Shadow Palette 8.3 ~ 8.7 g",
                "signature": "Innisfree",
                "origin": "Hàn Quốc",
                "factory": "Hàn Quốc",
                "skin": "",
                "problem": "",
                "price": "700000",
                "img": "SM3.jpg"
            },
            {
                "id": "PM1",
                "name": "Bảng phấn mắt các màu cơ bản innisfree Essential Shadow Palette 8.3 ~ 8.7 g",
                "signature": "Innisfree",
                "origin": "Hàn Quốc",
                "factory": "Hàn Quốc",
                "skin": "",
                "problem": "",
                "price": "700000",
                "img": "SM3.jpg"
            },
            {
                "id": "PM1",
                "name": "Bảng phấn mắt các màu cơ bản innisfree Essential Shadow Palette 8.3 ~ 8.7 g",
                "signature": "Innisfree",
                "origin": "Hàn Quốc",
                "factory": "Hàn Quốc",
                "skin": "",
                "problem": "",
                "price": "700000",
                "img": "SM3.jpg"
            },
            {
                "id": "PM1",
                "name": "Bảng phấn mắt các màu cơ bản innisfree Essential Shadow Palette 8.3 ~ 8.7 g",
                "signature": "Innisfree",
                "origin": "Hàn Quốc",
                "factory": "Hàn Quốc",
                "skin": "",
                "problem": "",
                "price": "700000",
                "img": "SM3.jpg"
            },
        ]);
        console.log(result.insertedIds);
        console.log("insert successfully");
    } catch (error) {
        console.log('err', + error)
    }
}

insertProductData();