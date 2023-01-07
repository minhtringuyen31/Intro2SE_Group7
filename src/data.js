const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MOGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Connected to group 07 database to get Product');
});

const coll  = db.collection('product');

async function insertProductData() {
    try {
        const result = await coll.insertMany([
            {
                "category": "",
                "name": "Innisfree Green Tea Seed Serum 30 mL",
                "brand": "Innisfree",
                "origin": "Korea",
                "factory": "Korea",
                "skin types": "Dry skin, Oily skin lacks moisture, Sensitive skin",
                "skin problem": "Dry, sensitive",
                "img": "/img/product/SR1.jpg",
                "color": ["",""],
                "size": ["",""],
                "star": 4,
                "descripstion": "",
                "the number of": 10,
                "price": "310000",
            }
        ]);
        
        console.log("insert successfully");
    } catch (error) {
        console.log('err', + error)
    }
}

insertProductData();