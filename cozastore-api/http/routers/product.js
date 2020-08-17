const express = require("express");
const productMD = require("../middleware/product");
const path = require("path");
const multer = require("multer");
const auth = require("../../services/jwt");

// const uploadFilePath = multer({
//   dest: path.join(__dirname, "../../public/images/product"),
// });
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images/product"));
  },
});

router.get("/", productMD.checkQueryGetProduct, productMD.getProducts);

router.post(
  "/add",
  multer({ storage }).array("image"),
  productMD.validateAddProduct,
  productMD.uploadFile,
  productMD.insertProductDB
);

router.get(
  "/:_id",
  productMD.checkParamsGetProductDetail,
  productMD.getProductDetail
);

module.exports = router;
