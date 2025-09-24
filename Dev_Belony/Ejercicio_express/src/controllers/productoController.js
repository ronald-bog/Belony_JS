const productoService = require("../services/productoServicio");

async function getAllProducts(req, res) {
  const { authorization } = req.headers;

  const productos = await productoService.getAllProducts(authorization);
  if (productos.success) {
    res.status(200).json(productos);
  } else {
    res.status(500).end(productos.message);
  }
}

async function getProductById(req, res) {
  const id = req.params.id;
  const producto = await productoService.getProductById(id);
  if (producto.success) {
    res.status(200).json(producto);
  } else {
    res.status(500).end(producto.message);
  }
}

async function postProduct(req, res) {
  const { id, descripcion, valor } = req.body;
  const newProducto = await productoService.postProduct(id, descripcion, valor);
  if (newProducto.success) {
    res.status(201).json(newProducto);
  } else {
    res.status(500).end(newProducto.message);
  }
}

async function putProduct(req, res) {
  const { descripcion, valor } = req.body;
  const { id } = req.params;

  const productoActualizado = await productoService.putProduct(
    id,
    descripcion,
    valor
  );
  if (productoActualizado.success) {
    res.status(201).json(productoActualizado);
  } else {
    res.status(500).end(productoActualizado.message);
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;

  const productoDeleted = await productoService.deleteProduct(id);
  if (productoDeleted.success) {
    res.status(201).json(productoDeleted);
  } else {
    res.status(500).end(productoDeleted.message);
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};
