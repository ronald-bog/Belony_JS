const mysql = require('mysql2/promise');
const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.json());

const infoBase = {
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'data_flask'
};

const pool = mysql.createPool(infoBase);

app.get('/usuarios', async (req, res) => {
    try {
        const sql = 'SELECT * FROM usuarios';
        const [rows] = await pool.execute(sql);

        if (rows.length === 0) {
            return res.status(202).json({ message: "La base de datos esta vacia" });
        }

        const respuesta = {
            message: 'Listado de usuarios',
            result_sql: 'OK',
            data: rows
        };
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ message: 'Ocurrio un error en base de datos', success: false, errorQ: error });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    const idx = req.params.id;
    //const sql = 'SELECT * FROM usuarios WHERE id =' + idx; // no recomendable para evitar inyeccion sql
    //const sql = 'SELECT * FROM usuarios WHERE id = ?' // (?) parametro posicional, placeholder, especificador
    const [result] = await pool.execute('SELECT * FROM usuarios WHERE id = ?', [idx]);
    console.log(result[0]);
});

app.listen(PORT, () => {
    console.log('Servidor ok');
});

app.post('/usuarios', async (req, res) => {
    const { nombre, correo } = req.body;
    //const nombre = body.nombre
    //const correo = body.correo

    const sql = 'INSERT INTO usuarios (nombre, correo) VALUES (?,?)';
    const respuesta = await pool.execute(sql, [nombre, correo]);
    res.status(201).json(respuesta);
});