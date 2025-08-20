const mysql = require('mysql2/promise');
const express = require('express');
const app = express();
const PORT = 3001;

const infoBase = {
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'data_flask'
};

const pool = mysql.createPool(infoBase);

app.get('/test', async (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    const [rows] = await pool.execute(sql);
    console.log(rows);
});

app.listen(PORT, () => {
    console.log('Servidor ok');
});