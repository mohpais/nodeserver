const mysql = require('mysql');
require('dotenv').config()

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
})

conn.connect(async(err) => {
    if (err) throw err;
    console.log('Database connected!');
})

module.exports = conn