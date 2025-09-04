const productoRepository = require("../repositories/productoRepository");

async function noProduct(req, res, next) {
  const id = req.params.id;
  const verificarId = await productoRepository.getProductById(id);
  if (verificarId.length === 0) {
    res.status(400).json({ message: "El producto no existe" });
  }
  next();
}
module.exports = { noProduct };
