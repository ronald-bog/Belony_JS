const express = require("express");
const router = express.Router();
const movimientoController = require("../controllers/movimientoController");
const { noMovimiento1 } = require("../middleware/noMovimiento");
router.post("/", movimientoController.createMovimiento);
router.get("/:id", noMovimiento1, movimientoController.getMovimientoById);
router.get("/saldo/:id", movimientoController.getSaldo);

module.exports = router;
