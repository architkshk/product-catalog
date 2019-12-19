const express = require("express");
const router = express.Router();
const { filterProducts } = require("../controllers").productController;

router.route("/products/?").get(filterProducts);

router.route("/").get((req, res) => {
  res.json({
    message: "Welcome to Product Catalog."
  });
});

module.exports = router;
