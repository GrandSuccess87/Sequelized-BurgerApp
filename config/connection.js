// import { connect } from "http2";

// Set up MySQL connection by connecting Node to MySQL.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "burgers_db"
// });

// if(process.env.JAWSDB){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);

// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'hacktheplanet',
//     database: 'todoagain_db'
//   });
// };



// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;

var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {  
 connection = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "1234",
 database: "burgers_db"
});

};

connection.connect();

module.exports = connection;

