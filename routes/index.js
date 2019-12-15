const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controllers").productController;

router.route("/products").get(getAllProducts);

router.route("/").get((req, res) => {
  res.json({
    message:
      "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
  });
});

module.exports = router;
