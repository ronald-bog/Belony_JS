const usuariosService = require('../services/usuariosService');

async function getAllUsuarios(req, res) {
    const result = await usuariosService.getAllUsuarios();
    res.status(200).json(result);
};

module.exports = { getAllUsuarios };
