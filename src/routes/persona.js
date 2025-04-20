const express = require("express");
const router = express.Router(); //manejador de rutas de express
const personaSchema = require("../models/persona");
//Nuevo Persona
router.post("/persona", (req, res) => {
    const persona = personaSchema(req.body);
    persona
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los personas
router.get("/persona", (req, res) => {
    personaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un persona por su id
router.get("/persona/:id", (req, res) => {
    const { id } = req.params;
    personaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un persona por su id
router.put("/persona/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, cedula, telefono, gmail, direccion } = req.body;
    personaSchema
        .updateOne({ _id: id }, {
            $set: { nombre, cedula, telefono, gmail, direccion }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un persona por su id

router.delete("/persona/:id", (req, res) => {
    const { id } = req.params;
    personaSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});


module.exports = router;
