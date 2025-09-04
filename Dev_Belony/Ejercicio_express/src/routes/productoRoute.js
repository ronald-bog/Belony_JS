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

router.get("/", getAllProducts);
router.get("/:id", noProduct, getProductById);
router.post("/", postProduct);
router.put("/:id", noProduct, putProduct);
router.delete("/:id", noProduct, deleteProduct);

module.exports = router;
