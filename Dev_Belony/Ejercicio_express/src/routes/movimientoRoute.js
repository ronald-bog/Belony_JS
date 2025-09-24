const express = require("express");
const router = express.Router();
const { noProduct } = require("../middleware/noProduct");
const movimientoController = require("../controllers/movimientoController");
const { AuthToken } = require("../middleware/validacionToken");

router.get("/", AuthToken, movimientoController.getAllMovimiento);
router.post("/", AuthToken, movimientoController.createMovimiento);
router.get(
  "/:id",
  AuthToken,
  noProduct,
  movimientoController.getMovimientoById
);
router.get("/saldo/:id", AuthToken, noProduct, movimientoController.getSaldo);

module.exports = router;
