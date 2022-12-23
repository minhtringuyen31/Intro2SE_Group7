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
                "id": "PM1",
                "name": "Innisfree Essential Shadow Palette 8.5 g",
                "type": "Eye shadow",
                "brand": "Innisfree",
                "origin": "Korean",
                "factory": "Korean",
                "skin types": "",
                "skin problem": "",
                "price": "700000",
                "img": "PM1.jpg"
            },
            {
                "id": "PM2",
                "name": "Innisfree Airy Eye Shadow Palette 7.1 g",
                "type": "Eye shadow",
                "brand": "Innisfree",
                "origin": "Korean",
                "factory": "Korean",
                "skin types": "",
                "skin problem": "",
                "price": "440000",
                "img": "PM2.jpg"
            },
            {
                "id": "PM3",
                "name": "Clio Pro Eye Palette 0.6g #03 Coral Talk",
                "type": "Eye shadow",
                "brand": "Clio",
                "origin": "Korean",
                "factory": "Korean",
                "skin types": "",
                "skin problem": "",
                "price": "895000",
                "img": "PM3.jpg"
            },
            {
                "id": "PM4",
                "name": "Lemonade Supertiger Tigereyes Shadow Palette 8.8g",
                "type": "Eye shadow",
                "brand": "Lemonade",
                "origin": "Korean",
                "factory": "Korean",
                "skin types": "",
                "skin problem": "",
                "price": "169000",
                "img": "PM4.jpg"
            },
            {
                "id": "SM1",
                "name": "Dior Addict Lipstick Rouge Shine - Dior 8 ( Newest 2022 )",
                "type": "Lipstick",
                "brand": "Dior",
                "origin": "France",
                "factory": "France",
                "skin types": "",
                "skin problem": "",
                "price": "799000",
                "img": "SM1.jpg"
            },
            {
                "id": "SM2",
                "name": "YSL The Slim 27 Conflicting Crimson",
                "type": "Lipstick",
                "brand": "YSL",
                "origin": "France",
                "factory": "Korean",
                "skin types": "",
                "skin problem": "",
                "price": "799000",
                "img": "SM2.jpg"
            },
            {
                "id": "SM3",
                "name": "YGuerlain Rouge  #N23",
                "type": "Lipstick",
                "brand": "Geurlain",
                "origin": "France",
                "factory": "France",
                "skin types": "",
                "skin problem": "",
                "price": "1250000",
                "img": "SM3.jpg"
            },
            {
                "id": "SM4",
                "name": "Burberry Kisses Matte 93 Russet Hot Trend",
                "type": "Lipstick",
                "brand": "Burberry",
                "origin": "England",
                "factory": "England",
                "skin types": "",
                "skin problem": "",
                "price": "7899000",
                "img": "SM4.jpg"
            },
            {
                "id": "SR1",
                "name": "Innisfree Green Tea Seed Serum 30 mL",
                "type": "SERUM",
                "brand": "Innisfree",
                "origin": "Korea",
                "factory": "Korea",
                "skin types": "Dry skin, Oily skin lacks moisture, Sensitive skin",
                "skin problem": "Dry, sensitive",
                "price": "310000",
                "img": "SR1.jpg"
            },
            {
                "id": "SM2",
                "name": "Serum Skin1004 Madagascar Centella Ampoule 55ml",
                "type": "SERUM",
                "brand": "Skin1004",
                "origin": "Korea",
                "factory": "Korea",
                "skin types": "Sensitive skin",
                "skin problem": "Dry, sensitive",
                "price": "333000",
                "img": "SR2.jpg"
            },
            {
                "id": "SM3",
                "name": "Huxley Essence; Brightly Ever After 30ml",
                "type": "SERUM",
                "brand": "Huxley",
                "origin": "Korea",
                "factory": "Korea",
                "skin types": "Many skin types",
                "skin problem": "Dark skin, Olive skin",
                "price": "512000",
                "img": "SR3.jpg"
            },
            {
                "id": "SM4",
                "name": "Bio-essence Bio-Bird's Nest Collagen 1000 Essence 30ml",
                "type": "SERUM",
                "brand": "Bio-essence",
                "origin": "Singapore",
                "factory": "Malaysia",
                "skin types": "Many skin types",
                "skin problem": "Olive skin, Dark skin, Dry skin",
                "price": "429000",
                "img": "SR4.jpg"
            }
        ]);
        
        console.log("insert successfully");
    } catch (error) {
        console.log('err', + error)
    }
}

insertProductData();