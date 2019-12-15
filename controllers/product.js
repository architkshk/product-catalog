const Product = require("../models/Product");
const Category = require("../models/Category");

const addProduct = async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.body.category });
    if (!category) res.status(404).send({ error: "Invalid Category" });

    req.body.category = category._id;
    const product = new Product(req.body);
    await product.save();
    category.products.push(product._id);
    await category.save();
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.send({ products });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const getProductDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) res.status(404).send({ error: "Not Found" });
    res.send(product);
  } catch (error) {
    res.status(500).send({ error });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  try {
    let product = await Product.findById(id).populate("category");
    if (!product) res.status(404).send({ error: "Product not found" });
    if (updatedProduct.name) product.name = updatedProduct.name;
    if (updatedProduct.brand) product.brand = updatedProduct.brand;
    if (updatedProduct.image) product.image = updatedProduct.image;
    if (
      updatedProduct.category &&
      product.category._id.toString() !== updatedProduct.category
    ) {
      const currentCategory = await Category.findById(product.category._id);
      const newCategory = await Category.findOne({
        name: updatedProduct.category
      });
      let index = currentCategory.products.indexOf(product._id);
      if (index >= 0) {
        currentCategory.products.splice(index, 1);
        await currentCategory.save();
      }
      newCategory.products.push(product._id);
      await newCategory.save();
      product.category = newCategory._id;
    }
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (!product) res.status(404).send({ error: "Not Found" });
    const category = await Category.findById(product.category);
    let index = category.products.indexOf(product._id);
    category.products.splice(index, 1);
    category.save();
    await Product.remove({ _id: id });
    res.send({ status: "Success" });
  } catch (error) {
    res.status(404).send(error);
  }
};

const filterProducts = async (req, res) => {
  try {
    const { query } = req;
    let { category } = query;
    delete query.category;
    console.log(query);
    const products = await Product.find(query).populate("category");
    if (category)
      products.filter(product => product.category.name === category);
    res.send({ products });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
  filterProducts
};
