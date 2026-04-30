// Connection File For Q.1

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Bank"
});


db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection Done");
    }
});


module.exports = db;