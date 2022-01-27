const express = require("express");
const digimon = require("./digimon.js");
const route = express.Router();

// /digimon/find

route.use("/digimon", digimon);
route.use((error, req, res, next) => {
  console.log(error);
});

module.exports = route;
