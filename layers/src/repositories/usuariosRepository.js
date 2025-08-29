const pool = require('../config/db');

async function getAllUsuarios() {
    const sql = 'SELECT * FROM usuarios';
    const [rows] = await pool.execute(sql);
    return rows;
}

module.exports = { getAllUsuarios };