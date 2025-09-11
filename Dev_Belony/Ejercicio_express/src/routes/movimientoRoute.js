const express = require("express");
const router = express.Router();
const { noProduct } = require("../middleware/noProduct");
const movimientoController = require("../controllers/movimientoController");

router.get("/", movimientoController.getAllMovimiento);
router.post("/", movimientoController.createMovimiento);
router.get("/:id", noProduct, movimientoController.getMovimientoById);
router.get("/saldo/:id", noProduct, movimientoController.getSaldo);

module.exports = router;
