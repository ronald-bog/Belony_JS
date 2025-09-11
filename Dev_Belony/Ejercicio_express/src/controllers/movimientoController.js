const movimientoservice = require("../services/movimientoServicio");

async function createMovimiento(req, res) {
  const bodyMovimiento = req.body;
  const newMovimiento = await movimientoservice.createMovimiento(
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

async function getSaldo() {}

module.exports = { createMovimiento, getMovimientoById, getSaldo };
