// const mysql = require('mysql2/promise');

// const bluebird = mysql.bluebird;
// var connection = null;

// //create connection to database 
// connectTo_DB = () => {
//     connection = mysql.createConnection({
//     host: 'localhost', user: 'root', password: 'root', database: 'mydb', Promise: bluebird});
//     console.log(connection);
// };

const mysql = require('mysql2');
var connection = null;

//create connection to database 
connectTo_DB = () => {
    // connection = mysql.createPool({
    // host: 'localhost', user: 'root', password: 'root', database: 'mydb'});
    // connection = mysql.createPool({
    //     host: "185.27.134.10", user: 'epiz_33146592', password: '123456', database: 'epiz_33146592_thien1234'});
    connection = mysql.createPool({
        host: '127.0.0.1', user: 'root', password: '1234', database: 'dbcosmetic'});
    console.log('Connect to DB root');
}; 

connectTo_DB();

module.exports = connection;
