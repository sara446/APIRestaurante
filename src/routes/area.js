const express = require("express");
const router = express.Router(); //manejador de rutas de express
const personaSchema = require("../models/persona");
const areaSchema = require("../models/area");

//areas
router.post("/areas", (req, res) => {
    const area = areaSchema(req.body);
    area
        .save().then((data) => {
            res.json(data)
        }).catch((error) => res.send(error));
});

//Modificar los datos de un área para agregar un animal
router.put("/areas/:id", async (req, res) => {
    const { id } = req.params;
    const persona = personaSchema(req.body);
    var idPersona = null;

    const personaConsulta = await personaSchema.findOne({ codigo: req.body.codigo });
    if (!personaConsulta) {
        await persona.save().then((dataPersona) => {
            idPersona = dataPersona._id;
        });
    } else {
        idPersona = personaConsulta._id;
    }

areaSchema
    .updateOne({ _id: id }, {
        //$push >> agrega un nuevo elemento sin importar si ya existe
        //$addToSet >> agrega un nuevo elemento sin repetirlo
        $addToSet: { persona: idPersona }
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

