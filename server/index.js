const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bearerToken = require("express-bearer-token");
const PORT = process.env.PORT || 2000;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bearerToken());
app.use(express.json());
app.use(express.static("./src/puplic")); // untuk akses file hasil upload file dari path urlnya secara langsung

// chek conection
const { checkSequelize, dbSequelize } = require("./src/config/db");
checkSequelize();
dbSequelize.sync();

app.get("/", (req, res) => {
  res.status(200).send("<h1> LIBRARY API </h1>");
});

//Routing list
const { usersRouter, productsRouter } = require("./src/routers");
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => console.log("API RUNNING ON PORT", PORT));
