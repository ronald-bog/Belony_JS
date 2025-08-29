const mysql = require('mysql2/promise');

const infoBase = {
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'data_flask'
};

const pool = mysql.createPool(infoBase);

module.exports = pool;