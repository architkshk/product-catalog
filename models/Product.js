const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  brand: {
    type: String,
    trim: true,
    required: true
  },
  image: { type: String }
});

module.exports = mongoose.model("Product", ProductSchema);
