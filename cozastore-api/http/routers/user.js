const express = require("express");
const router = express.Router();
const middleWareUser = require("../middleware/user");

router.post(
  "/login",
  middleWareUser.validateBodyLogin,
  middleWareUser.getUserLogin,
  middleWareUser.createTokenLogin
);

router.post(
  "/register",
  middleWareUser.validateBodyCreateUser,
  middleWareUser.createUser
);

module.exports = router;
