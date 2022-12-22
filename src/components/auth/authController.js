const passport = require('passport');
const authService = require('./authService');

exports.signup = async (req, res, next) => {
    console.log(req.body);
    const { userName, userEmail, userPassword } = req.body;
    if (authService.checkSignUpFormat(req.body) === false) {
        res.render('auth/sign', { layout: false });
        return;
    }
    const check = await authService.isExistedAccount(userEmail);
    if (check == true) {
        res.render('auth/sign', { layout: false });
        console.log("User existed");
        return;
    } else {
        console.log("user not exist")
        authService.register(req.body);
        res.redirect('/index');
    }
}

// import { MongoClient } from "mongodb";

// // Replace the uri string with your MongoDB deployment's connection string.
// const uri = "<connection string uri>";

// const client = new MongoClient(uri);

// async function run() {
//     try {
//         const database = client.db("insertDB");
//         const haiku = database.collection("haiku");
//         // create a document to insert
//         const doc = {
//             title: "Record of a Shriveled Datum",
//             content: "No bytes, no problem. Just insert a document, in MongoDB",
//         }
//         const result = await haiku.insertOne(doc);

//         console.log(`A document was inserted with the _id: ${result.insertedId}`);
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);
