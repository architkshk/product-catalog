const express = require("express");
const router = express.Router();
const { addCategory } = require("../controllers").categoryController;

router.route("/add").post(addCategory);

module.exports = router;
