const { pool } = require("../config/db");

async function getAllMovimiento() {
  console.log("premye");
  const sql = "SELECT * FROM movimiento";

  const [allMovimiento] = await pool.execute(sql);
  console.log(allMovimiento);
  return allMovimiento;
}

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
  const sql = "SELECT * FROM movimiento WHERE id_producto = ?";
  const [movimientoById] = await pool.execute(sql, [id]);
  return movimientoById;
}

async function getSaldo(id) {
  const sql =
    "SELECT SUM(cantidad) AS saldo FROM movimiento WHERE id_producto = ?";
  const [cantidadSaldo] = await pool.execute(sql, [id]);
  console.log(cantidadSaldo);
  return cantidadSaldo[0];
}

module.exports = {
  getAllMovimiento,
  createMovimiento,
  getMovimientoById,
  getSaldo,
};
