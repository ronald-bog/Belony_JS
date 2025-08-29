const usuariosRepository = require('../repositories/usuariosRepository');

async function getAllUsuarios() {
    try {
        const usuarios = await usuariosRepository.getAllUsuarios();

        if (usuarios.length === 0) {
            return { message: "La base de datos esta vacia" };
        }

        return {
            success: true,
            data: usuarios,
            message: 'Listado de usuarios'
        };
    } catch (error) {
        return {
            success: false,
            message: 'Ocurrio un error en base de datos'
        };
    }
}

module.exports = { getAllUsuarios };