const pool = require("../config/db");

async function createMovimiento(id_producto, descripcion_movimiento, cantidad) {
  const sql =
    "INSERT INTO movimiento (id_producto, descripcion_movimiento, cantidad) VALUES (?,?,?)";

  const [newMovimiento] = await pool.execute(sql, [
    id_producto,
    descripcion_movimiento,
    cantidad,
  ]);

  return newMovimiento;
}

async function getMovimientoById(id) {
  const sql = "SELECT * FROM movimiento WHERE id = ?";
  const [movimientoById] = await pool.execute(sql, [id]);
  return movimientoById;
}

async function getSaldo() {}

module.exports = { createMovimiento, getMovimientoById, getSaldo };
