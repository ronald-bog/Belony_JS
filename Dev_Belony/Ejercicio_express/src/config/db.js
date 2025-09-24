const mysql = require("mysql2/promise");

const baseDatos = {
  host: "localhost",
  user: "root",
  database: "express",
  password: "123456789",
};

const loginDb = {
  host: "localhost",
  user: "root",
  database: "login_db",
  password: "123456789",
};

const pool = mysql.createPool(baseDatos);
const pool2 = mysql.createPool(loginDb);

module.exports = { pool, pool2 };
