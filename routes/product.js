const express = require("express");
const router = express.Router();
const {
  addProduct,
  deleteProduct,
  updateProduct,
  filterProducts,
  getProductDetails
} = require("../controllers").productController;

router.route("/add").post(addProduct);
router.route("/update/:id").post(updateProduct);
router.route("/delete/:id").get(deleteProduct);
router.route("/?").get(filterProducts);
router.route("/:id").get(getProductDetails);

module.exports = router;
