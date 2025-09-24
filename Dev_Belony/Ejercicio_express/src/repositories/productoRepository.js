const { pool } = require("../config/db");

async function getAllProducts() {
  const sql = "SELECT * FROM producto";
  const [rows] = await pool.execute(sql);
  return rows;
}

async function getProductById(id) {
  const sql = "SELECT * FROM producto WHERE id = ?";
  const [rows] = await pool.execute(sql, [id]);
  return rows;
}

async function postProduct(id, descripcion, valor) {
  const sql = "INSERT INTO producto (id, descripcion, valor) VALUES (?,?,?)";
  const [newProducto] = await pool.execute(sql, [id, descripcion, valor]);
  return newProducto;
}

async function putProduct(id, descripcion, valor) {
  const sql = "UPDATE producto SET descripcion = ?, valor = ? WHERE id = ?";
  const [productoActualizado] = await pool.execute(sql, [
    descripcion,
    valor,
    id,
  ]);
  return productoActualizado;
}

async function deleteProduct(id) {
  const sql = "DELETE FROM producto WHERE id = ?";
  const [productoDeleted] = await pool.execute(sql, [id]);
  return productoDeleted;
}

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};
