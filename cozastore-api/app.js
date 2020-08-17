const express = require("express");
const app = express();
require("dotenv").config();
const productHttp = require("./http/routers/product");
const userHttp = require("./http/routers/user");
const cors = require("cors");
const path = require("path");
// require("./responsitories/db");
const mongoose = require("mongoose");

const port = 3001;
(async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB connected!");
  } catch (error) {
    throw error;
  }

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/public", express.static(path.join(__dirname, "public")));

  app.use("/product", productHttp);
  app.use("/user", userHttp);

  app.listen(port, () => {
    console.log("Server is running port " + port);
  });
})();
