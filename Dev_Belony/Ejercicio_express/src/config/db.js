const mysql = require("mysql2/promise");

const baseDatos = {
  host: "localhost",
  user: "root",
  database: "express",
  password: "123456789",
};

const pool = mysql.createPool(baseDatos);

module.exports = pool;
