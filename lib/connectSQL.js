'use strict';

const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.error('\x1b[32mError connecting to the database:\x1b[0m', err);
    return;
  }
  console.log(
    `   \x1b[96m\x1b[1mConnected to the database \x1b[0m${process.env.DB_NAME} \x1b[96m\x1b[1msuccessfully`,
  );
});

module.exports = connection;
