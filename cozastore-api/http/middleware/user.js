const userRP = require("../../responsitories/user");
const jwt = require("jsonwebtoken");

module.exports = {
  validateBodyLogin: (req, res, next) => {
    console.log(req.body);
    if (req.body && req.body.email && req.body.password) {
      next();
    } else {
      return res.status(303).json({ message: "Faild" });
    }
  },

  getUserLogin: async (req, res, next) => {
    let user = await userRP
      .getUserByEmail(req.body.email)
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: "Faild" });
      });
    if (user && user.password === req.body.password) {
      req.user = user;
      next();
    } else {
      return res.status(303).json({ message: "Faild" });
    }
  },

  createTokenLogin: (req, res) => {
    jwt.sign(
      { _id: req.user._id, email: req.user.email },
      process.env.JWTSECRET,
      (err, token) => {
        if (err) {
          return res.status(303).json({ message: "Faild" });
        }
        token = `${process.env.BEARER} ${token}`;
        return res.status(201).json({ token });
      }
    );
  },

  validateBodyCreateUser: (req, res, next) => {
    if (req.body) {
      next();
    } else {
      return res.status(303).json({ message: "Faild" });
    }
  },
  createUser: async (req, res, next) => {
    let user = await userRP
      .insertUser(req.body)
      .then((data) => data)
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ message: "Faild" });
      });
    return res.status(201).json({ user });
  },
};
