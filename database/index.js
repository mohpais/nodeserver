const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog"
})

conn.connect(async(err) => {
    if (err) throw err;
    console.log('Database connected!');
})

module.exports = conn