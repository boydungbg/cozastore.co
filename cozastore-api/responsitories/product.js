const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
var SchemaTypes = mongoose.Schema.Types;

var productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must be string"],
    },
    price: {
      type: SchemaTypes.Double,
      required: [true, "Must be string"],
    },
    category: {
      type: String,
      required: [true, "Must be string"],
    },
    subcategory: {
      type: String,
      required: [true, "Must be string"],
    },
    introduce: {
      type: String,
      required: [true, "Must be string"],
    },
    description: {
      type: String,
      required: [true, "Must be string"],
    },
    weight: {
      type: SchemaTypes.Double,
      required: [true, "Must be double"],
    },
    dimensions: {
      long: { type: Number, required: [true, "Must be number"] },
      wide: { type: Number, required: [true, "Must be number"] },
      horizontal: { type: Number, required: [true, "Must be number"] },
    },
    materials: {
      type: SchemaTypes.Double,
      required: [true, "Must be double"],
    },
    option: [
      {
        color: { type: String, required: [true, "Must be string"] },
        quantity: { type: Number, required: [true, "Must be number"] },
      },
    ],
    image: { type: Array, required: [true, "Must be Array"] },
    size: {
      type: Array,
      required: [true, "Must be Array"],
    },
    timeCreate: {
      type: Number,
      default: Date.now(),
    },
    deleted: {
      type: Number,
      default: 0,
    },
    deletedAt: {
      type: Number,
    },
  },
  { versionKey: false }
);
productSchema.index({ Name: 1, _id: 1 });

const productRp = mongoose.model("product", productSchema);

module.exports = {
  getListProduct: (limit) => {
    return productRp.find().limit(limit);
  },

  insertProductDB: (product) => {
    var productInsert = new productRp({
      name: product.name,
      price: parseFloat(product.price),
      category: product.category,
      subcategory: product.subcategory,
      introduce: product.introduce,
      description: product.description,
      weight: parseFloat(product.weight),
      dimensions: {
        long: product.long,
        wide: product.wide,
        horizontal: product.horizontal,
      },
      materials: parseFloat(product.materials),
      option: product.option,
      image: product.pathImage,
      size: product.size,
    });
    return productInsert.save();
  },
  getProductById: (_id) => {
    return productRp.findById({ _id: _id });
  },
};
