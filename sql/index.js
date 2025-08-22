const express = require('express');
const pool = require('./conn');
const app = express();
const PORT = 3001;
app.use(express.json());

// Consulta todos los usuarios
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

// Consulta solo un usuario por su ID
app.get('/usuarios/:id', async (req, res) => {
    const idx = req.params.id;
    //const sql = 'SELECT * FROM usuarios WHERE id =' + idx; // no recomendable para evitar inyeccion sql
    //const sql = 'SELECT * FROM usuarios WHERE id = ?' // (?) parametro posicional, placeholder, especificador
    const [result] = await pool.execute('SELECT * FROM usuarios WHERE id = ?', [idx]);
    res.status(200).json(result);
});

// Creacion de un usuario
app.post('/usuarios', async (req, res) => {
    const { nombre, correo } = req.body;
    //const nombre = body.nombre
    //const correo = body.correo

    const sql = 'INSERT INTO usuarios (nombre, correo) VALUES (?,?)';
    const respuesta = await pool.execute(sql, [nombre, correo]);
    res.status(201).json(respuesta);
});

// Edicion de un usuario por su ID
app.put('/usuarios/:id', async (req, res) => {
    const { nombre, correo } = req.body;
    const id = req.params.id;
    const sql = 'UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?';
    const respuesta = await pool.execute(sql, [nombre, correo, id]);
    const resClient = {
        mensaje: 'El usuario se actualizo correctamente',
        success: 'OK',
        resultado_SQL: 'OK',
        info_SQL: respuesta[0].info
    };
    res.status(200).json(resClient);
});

// Edicion de un usuario por su ID (query params)
app.put('/usuarios', async (req, res) => {
    const { nombre, correo, id } = req.query;
    const sql = 'UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?';
    const respuesta = await pool.execute(sql, [nombre, correo, id]);
    const resClient = {
        mensaje: 'El usuario se actualizo correctamente con query params',
        success: 'OK',
        resultado_SQL: 'OK',
        info_SQL: respuesta[0].info
    };
    res.status(200).json(resClient);
});

// Eliminacion de un usuario por su ID
app.delete('/usuarios/:id', async (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    const response = await pool.execute(sql, [id]);
    const resClient = {
        mensaje: 'El usuario se elimino correctamente',
        resultado_SQL: 'OK',
    };
    res.status(200).json(resClient);
});

app.listen(PORT, () => {
    console.log('Servidor ok');
});

