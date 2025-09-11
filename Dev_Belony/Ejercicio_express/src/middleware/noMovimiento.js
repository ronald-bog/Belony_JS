const movimientoRepository = require("../repositories/movimientoRepository");

async function noMovimiento1(req, res, next) {
  const { id } = req.params;
  const verificarId = await movimientoRepository.getMovimientoById(id);
  if (verificarId.length === 0) {
    res.status(400).json({ message: "El movimiento no existe" });
  }

  next();
}
module.exports = { noMovimiento1 };
