const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

router.get("/", productoController.getAllProducts);
router.get("/:id", productoController.getProductById);
router.post("/", productoController.postProduct);
router.put("/:id", productoController.putProduct);
router.delete("/:id", productoController.deleteProduct);

module.exports = router;
