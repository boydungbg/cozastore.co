const { Schema } = require("mongoose");
require("mongoose-double")(mongoose);
var SchemaTypes = mongoose.Schema.Types;

var shoppingCart = new Schema(
  {
    productId: {
      type: String,
      require: [true, "Must be string"],
    },
    userId: {
      type: String,
      require: [true, "Must be string"],
    },
    quantity: {
      type: Number,
      require: [true, "Must be number "],
    },
    color: {
      type: String,
      require: [true, "Must be string "],
    },
    size: {
      type: String,
      require: [true, "Must be string "],
    },
    price: {
      type: SchemaTypes.Double,
      require: [true, "Must be string "],
    },
  },
  { versionKey: false }
);

shoppingCart.index({ email: 1, _id: 1 });
const shoppingCartRP = mongoose.model("shopping-cart", shoppingCart);
