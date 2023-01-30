const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  hashPasword: (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    return hashPass;
  },
  createToken: (payload, expired = "24h") => {
    console.log("payload adalah", payload);
    let token = jwt.sign(payload, "library", {
      expiresIn: expired,
    });
    return token;
  },
  readToken: (req, res, next) => {
    //pengecekan token
    jwt.verify(req.token, "library", (err, decript) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Aunthenticate token failed",
        });
      }
      console.log("cek decript", decript);
      req.decript = decript; // menampung data hasil pengecekan token
      next();
    });
  },
};
