const mysql = require('mysql2');
var connection = null;

//create connection to database 
connectTo_DB = () => {
    console.log("Connecting DB");
    connection = mysql.createPool({
        host: 'localhost', user: 'root', password: '123456', database: 'intro2sedb'
    });
    console.log("Connected DB");
};

connectTo_DB();

module.exports = connection;