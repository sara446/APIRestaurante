const express = require("express");
const router = express.Router(); //manejador de rutas de express
const personaSchema = require("../models/persona");
const reservaSchema = require("../models/reserva");

//reserva
router.post("/reserva", (req, res) => {
    const reserva = reservaSchema(req.body);
    reserva
        .save().then((data) => {
            res.json(data)
        }).catch((error) => res.send(error));
});

//Modificar los datos de un área para agregar un persona
router.put("/reserva/:id", async (req, res) => {
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

reservaSchema
    .updateOne({ _id: id }, {
        //$push >> agrega un nuevo elemento sin importar si ya existe
        //$addToSet >> agrega un nuevo elemento sin repetirlo
        $addToSet: { persona: idPersona }
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//Consultar todos las reservas
router.get("/reserva", (req, res) => {
    reservaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar una reserva por su id
router.get("/reserva/:id", (req, res) => {
    const { id } = req.params;
    reservaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/reserva/:id", (req, res) => {
    const { id } = req.params;
    reservaSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});



module.exports = router;

