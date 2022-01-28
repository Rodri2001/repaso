const express = require("express");
const route = express.Router();
const { Digimon, Episode } = require("./db");

route.get("/getby", async (req, res, next) => {
  const { id } = req.query;
  try {
    if (id) {
      const digimon = await Digimon.findByPk(id);
      if (!digimon) return res.json("no se encontro el digimon");
      else {
        return res.json(digimon);
      }
    }
  } catch (error) {
    next(error);
  }
});

route.get("/findAll", (req, res) => {
  Digimon.findAll()
    .then((digimon) => {
      if (digimon) return res.json(digimon);
      else {
        return res.json("no hay nada");
      }
    })
    .catch((error) => {
      next(error);
    });
});

route.post("/relacionar", async (req, res) => {
  const { episodeName, digimonName } = req.body;
  if (episodeName && digimonName) {
    let digimon = await Digimon.findOne({
      where: {
        name: digimonName,
      },
    });
    let episodio = await Episode.findOne({
      where: {
        name: episodeName,
      },
    });
    return res.json(await digimon.addEpisode(episodio));
  }
});

route.post("/create", async (req, res) => {
  const { name, color, episodio } = req.body;
  if (name && color) {
    const digimon = await Digimon.create({
      name,
      color,
    });
    return res.json(digimon);
  }
  return res.json("error");
});

route.get("/findbyname/:name", (req, res) => {
  const name = req.params.name;
  const newDigimos = digimons.filter((digi) => {
    return digi.name === name;
  });
  res.json(newDigimos);
});

route.get("/find", (req, res) => {
  const id = req.body.id;

  const digimon = digimons.find((digi) => {
    return digi.id === parseInt(id);
  });
  res.json(digimon);
});

route.get("/all", (req, res) => {
  const db = [{ id: 4, name: "3", backgroundColor: "red" }];
  const newDigimons = digimons.map((digi) => {
    return {
      name: digi.name,
      backgroundColor: digi.color,
    };
  });
  const result = [...db, ...newDigimons]; // db.concat(newDigimons)
  res.json(result);
});

module.exports = route;
