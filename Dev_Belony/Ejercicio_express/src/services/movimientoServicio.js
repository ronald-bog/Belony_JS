const movimientoRepository = require("../repositories/movimientoRepository");

async function createMovimiento(bodyMovimiento) {
  try {
    const { id_producto, descripcion_movimiento, cantidad } = bodyMovimiento;
    let cantidadNegativa;
    if (
      descripcion_movimiento === "venta" ||
      descripcion_movimiento === "traslado"
    ) {
      cantidadNegativa = -Math.abs(cantidad);
      console.log(cantidadNegativa);
    } else {
      Math.abs(cantidad);
    }
    const newMovimiento = await movimientoRepository.createMovimiento(
      id_producto,
      descripcion_movimiento,
      cantidad
    );

    if (descripcion_movimiento === "traslado") {
      return {
        success: true,
        message: "El movimiento traslado fue exitosamente",
        data: newMovimiento,
      };
    } else if (descripcion_movimiento === "compra") {
      return {
        success: true,
        message: "La compra se hizo exitosamente!",
        data: newMovimiento,
      };
    } else if (descripcion_movimiento === "venta") {
    }
  } catch (error) {
    return {
      success: false,
      message: "Error al crear El moviento",
    };
  }
}

async function getMovimientoById(id) {
  try {
    const movimientoById = await movimientoRepository.getMovimientoById(id);
    return {
      success: true,
      data: movimientoById,
      message: `movimiento con id: ${id}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Ocurrió un error al consultar la base de datos.",
    };
  }
}

async function getSaldo() {}

module.exports = { createMovimiento, getMovimientoById, getSaldo };
