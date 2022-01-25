const { Router } = require('express')
const express = require('express')
const route = express.Router()

const digimons = [{ id:1,  name: "1", color: "red", img:[{name:"otro"},{name:"a"},{name:"otro"}] }, { id:2, name: "2", color: "red", img:[{name:"otro"},{name:"otro"},{name:"otro"}] },{ id:3, name: "2", color: "blue", img:[{name:"otro"},{name:"otro"},{name:"otro"}] }]

// /digimon/find

route.get("/findbyname/:name", (req, res) => {
  const name  = req.params.name
  const newDigimos = digimons.filter(
    (digi) => {
     return digi.name === name
    }

  )
  res.json(newDigimos)
})

route.get("/find", (req, res)=>{
  const id = req.body.id

  const digimon = digimons.find((digi)=>{
    return digi.id === parseInt(id)
  })
  res.json(digimon)

})

route.get("/all", (req, res) => {
  const db = [{ id: 4, name: "3", backgroundColor: "red" }]
  const newDigimons = digimons.map((digi)=>{
    return {
      name: digi.name,
      backgroundColor: digi.color,
    }
  })
  const result = [...db, ...newDigimons] // db.concat(newDigimons)
  res.json(result)
})

module.exports = route