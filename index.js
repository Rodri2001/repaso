const express = require("express");
const app = require("./src/app");
const { conn } = require("./src/db");
const {Digimon, Episode} = require('./src/db')

const server = express();

server.use(express.json());


let digimons = [
  {
    name: "NahuelMon",
    color: "Azul",
  },
  {
    name: "MatiMon",
    color: "Rojo",
  },
  {
    name: "CavalloMon",
    color: "Verde",
  },
];
let episodes = [
  {
    name: "EP 1",
    url: "https://www.youtube.com/watch?v=EOuHn6eiyjI&ab_channel=snakewalkerTK421",
  },
  {
    name: "EP 2",
    url: "https://www.youtube.com/watch?v=EOuHn6eiyjI&ab_channel=snakewalkerTK421",
  },
  {
    name: "EP 3",
    url: "https://www.youtube.com/watch?v=EOuHn6eiyjI&ab_channel=snakewalkerTK421",
  },
];

server.use("/", app);

conn.sync({ force: true }).then(() => {
  digimons.forEach(ele => {
    Digimon.create({
      name: ele.name,
      color: ele.color
    })
  })
  episodes.forEach(ele => {
    Episode.create({
      name: ele.name,
      url: ele.url
    })
  })
  server.listen(3001, () => {
    console.log("Estoy en el puerto 3001");
  });
});
 

