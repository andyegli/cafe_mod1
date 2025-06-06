require('dotenv').config(); // Load .env variables

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

conn.connect(function (err) {
  if (err) throw err;
  console.log('Database is connected successfully!');
});

module.exports = conn;
