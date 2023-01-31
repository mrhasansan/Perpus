const express = require("express");
const route = express.Router();
const { usersControler } = require("../../src/controlers");
const { readToken } = require("../config/encript");
const { uploader } = require("../config/uploader");
const { checkUser } = require("../config/validator");

route.get("/", usersControler.getData);
route.post("/login", usersControler.login);
route.post("/register", usersControler.register);
route.get("/keep", readToken, usersControler.keepLogin);
route.patch("/profile", readToken, uploader("/imgProfile", "IMGPROFILE").array("images", 1), usersControler.profileImg);
route.patch("/verified", readToken, usersControler.verifiedAccount);
module.exports = route;
