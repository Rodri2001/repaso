const express = require('express')
const app = require('./app');

const server = express();

server.use(express.json());

// /digimon/find

server.use("/",app)


server.listen(3001,()=>{
  console.log("Estoy en el puerto 3001")
})