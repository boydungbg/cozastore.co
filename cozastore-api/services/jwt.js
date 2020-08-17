const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  let token = "";
  if (bearerHeader) {
    token = bearerHeader.split(" ");
    jwt.verify(token[1], process.env.JWTSECRET, (err, data) => {
      if (err) {
        res.status(403).json({ message: "Must be sign in" });
        return;
      }
      req.infoUser = data;
      next();
    });
  } else {
    res.status(403).json({ message: "Must be sign in" });
  }
};
