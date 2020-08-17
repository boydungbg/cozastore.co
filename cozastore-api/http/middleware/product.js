const productRP = require("../../responsitories/product");
const path = require("path");
const fs = require("fs");

module.exports = {
  checkQueryGetProduct: (req, res, next) => {
    if (req.query && req.query.limit && req.query.page) {
      next();
    } else {
      res.status(303).json({ message: "Faild" });
    }
  },
  getProducts: async (req, res) => {
    let products = await productRP
      .getListProduct(parseInt(req.query.limit))
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: "Faild" });
      });
    return res.status(200).json({ products });
  },
  validateAddProduct: async (req, res, next) => {
    let option = [];
    console.log(req.body)
    if (req.body && req.body.color) {
      if (typeof req.body.color === "string") {
        option = {
          color: req.body.color,
          quantity: req.body.quantity,
        };
      } else {
        for (let i = 0; i < req.body.color.length; i++) {
          option.push({
            color: req.body.color[i],
            quantity: req.body.quantity[i],
          });
        }
      }
      req.body.option = option;
      next();
    } else {
      res.status(400).json({ message: "Faild" });
    }
  },

  uploadFile: (req, res, next) => {
    let pathImage = [];
    let checkFile = false;
    for (let i = 0; i < req.files.length; i++) {
      if (
        path.extname(req.files[i].originalname).toLowerCase() !== ".jpg" &&
        path.extname(req.files[i].originalname).toLowerCase() !== ".jpeg"
      ) {
        checkFile = true;
        break;
      }
    }
    for (let i = 0; i < req.files.length; i++) {
      if (checkFile === true) {
        fs.unlink(req.files[i].path, (err) => {
          if (err) {
            console.log(err);
          }
        });
      } else {
        const targetPath = path.join(
          __dirname,
          "../../public/images/product/" +
            req.files[i].filename +
            path.extname(req.files[i].originalname).toLowerCase()
        );
        pathImage.push(
          "http://localhost:3001/public/images/product/" +
            req.files[i].filename +
            path.extname(req.files[i].originalname).toLowerCase()
        );
        req.body.pathImage = pathImage;
        fs.rename(req.files[i].path, targetPath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    }
    if (checkFile === true) {
      res.status(400).json({ message: "File upload must be .jpg or .jpeg" });
    } else {
      next();
    }
  },
  insertProductDB: async (req, res) => {
    let added = await productRP
      .insertProductDB(req.body)
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "Faild" });
      });
    res.status(201).json({ added });
  },
  checkParamsGetProductDetail: async (req, res, next) => {
    if (req.params && req.params._id) {
      next();
    } else {
      res.status(303).json({ message: "Faild" });
    }
  },
  getProductDetail: async (req, res) => {
    let product = await productRP
      .getProductById(req.params._id)
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: "Faild" });
      });
    return res.status(200).json({ product });
  },
};
