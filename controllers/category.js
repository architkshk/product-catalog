const Category = require("../models/Category");

const addCategory = async (req, res) => {
  const category = req.body;
  try {
    await Category.create(category);
    res.send({
      status: "Success",
      category
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = {
  addCategory
};
