const movimientoRepository = require("../repositories/movimientoRepository");
const productoRepository = require("../repositories/productoRepository");

async function getAllMovimiento() {
  try {
    const allMovimiento = await movimientoRepository.getAllMovimiento();
    return {
      success: true,
      data: allMovimiento,
      message: "Lista de movimiento",
    };
  } catch (error) {
    return {
      success: false,
      message: "ocurrio un error en la base de datos",
    };
  }
}

async function createMovimiento(bodyMovimiento) {
  try {
    let { id_producto, descripcion_movimiento, cantidad } = bodyMovimiento;
    const productoId = await productoRepository.getProductById(id_producto);

    if (
      descripcion_movimiento === "venta" ||
      descripcion_movimiento === "traslado"
    ) {
      cantidad = -Math.abs(cantidad);
    }
    const saldoDisponible = await movimientoRepository.getSaldo(id_producto);
    const saldo = parseInt(saldoDisponible.saldo);

    if (saldo + cantidad < 0) {
      return {
        success: false,
        message: "Saldo insuficiente para realizar el movimiento.",
      };
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
      return {
        success: true,
        message: "El movimiento de la venta  se hizo exitosamente",
        data: newMovimiento,
        total: Math.abs(productoId[0].valor * cantidad),
      };
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

async function getSaldo(id) {
  try {
    const cantidadSaldo = await movimientoRepository.getSaldo(id);

    return {
      success: true,
      saldo: parseInt(cantidadSaldo.saldo),
    };
  } catch (error) {
    return {
      success: false,
      message: "Ocurrió un error al consultar la base de datos.",
    };
  }
}

module.exports = {
  getAllMovimiento,
  createMovimiento,
  getMovimientoById,
  getSaldo,
};
