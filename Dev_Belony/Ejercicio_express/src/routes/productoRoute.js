const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/productoController");
const { noProduct } = require("../middleware/noProduct");
const { AuthToken } = require("../middleware/validacionToken");

router.get("/", AuthToken, getAllProducts);
router.get("/:id", AuthToken, noProduct, getProductById);
router.post("/", AuthToken, postProduct);
router.put("/:id", AuthToken, noProduct, putProduct);
router.delete("/:id", AuthToken, noProduct, deleteProduct);

module.exports = router;
