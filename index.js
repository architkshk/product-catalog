const express = require("express");
const bodyParser = require("body-parser");

const db = require("./config/db");

const app = express();

db();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/product", require("./routes/product"));
app.use("/category", require("./routes/category"));
app.use("/", require("./routes"));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
