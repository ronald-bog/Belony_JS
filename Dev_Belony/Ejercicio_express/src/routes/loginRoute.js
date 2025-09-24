const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.post("/", userController.getUser);

module.exports = router;
