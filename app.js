const express = require('express')
const digimon = require('./digimon.js')
const route = express.Router()


// /digimon/find

route.use("/digimon",digimon)

module.exports = route