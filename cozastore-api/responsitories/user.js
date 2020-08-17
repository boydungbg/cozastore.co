const mongoose = require("mongoose");
require("mongoose-double")(mongoose);

var UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Must be string"],
    },
    fname: {
      type: String,
      required: [true, "Must be string"],
    },
    lname: {
      type: String,
      required: [true, "Must be string"],
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Must be string"],
    },
    address: {
      type: String,
    },
    dateCreate: {
      type: String,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

UserSchema.index({ email: 1, _id: 1 });
const userRP = mongoose.model("user", UserSchema);

module.exports = {
  getUserByEmail: (email) => {
    return userRP.findOne({ email: email });
  },
  insertUser: (user) => {
    const userDoc = new userRP({
      email: user.email,
      fname: user.fname,
      lname: user.lname,
      phoneNumber: user.phoneNumber,
      password: user.password,
    });
    return userDoc.save();
  },
};
