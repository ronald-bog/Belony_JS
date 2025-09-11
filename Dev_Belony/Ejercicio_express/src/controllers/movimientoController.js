const movimientoService = require("../services/movimientoServicio");

async function getAllMovimiento(req, res) {
  const allMovimiento = await movimientoService.getAllMovimiento();
  if (allMovimiento.success) {
    res.status(200).json(allMovimiento);
  } else {
    res.status(500).end(allMovimiento.message);
  }
}
async function createMovimiento(req, res) {
  const bodyMovimiento = req.body;
  const newMovimiento = await movimientoService.createMovimiento(
    bodyMovimiento
  );
  if (newMovimiento.success) {
    res.status(201).json(newMovimiento);
  } else {
    res.status(500).json(newMovimiento);
  }
}

async function getMovimientoById(req, res) {
  const id = req.params.id;
  const movimientoById = await movimientoService.getMovimientoById(id);
  if (movimientoById.success) {
    res.status(200).json(movimientoById);
  } else {
    res.status(500).end(movimientoById);
  }
}

async function getSaldo(req, res) {
  const { id } = req.params;
  console.log(id);
  const cantidadSaldo = await movimientoService.getSaldo(id);
  if (cantidadSaldo.success) {
    res.status(200).json(cantidadSaldo);
  } else {
    res.status(500).json(cantidadSaldo);
  }
}

module.exports = {
  getAllMovimiento,
  createMovimiento,
  getMovimientoById,
  getSaldo,
};
