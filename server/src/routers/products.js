const express = require("express");
const route = express.Router();
const { productsControler } = require("../../src/controlers");

route.get("/", productsControler.getData);
route.post("/register", productsControler.register);
// route.get("/list", productsControler.getList);
module.exports = route;
