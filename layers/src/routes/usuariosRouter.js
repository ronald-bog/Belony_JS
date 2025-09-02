const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const testMid = require('../middlewares/prueba');
const router = express.Router();

router.get('/', testMid, usuariosController.getAllUsuarios);

module.exports = router;
