const express = require("express");
const {
  addProduct,
  getAllProduct
} = require("../Controller/productController");
const router = express.Router();

router.post("/addProduct", addProduct);
router.get("/viewproduct", getAllProduct);

module.exports = router;