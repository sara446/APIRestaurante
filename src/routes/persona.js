const express = require("express");
const router = express.Router(); //manejador de rutas de express
const personaSchema = require("../models/persona");
//Nuevo Persona
router.post("/personas", (req, res) => {
    const persona = personaSchema(req.body);
    persona
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar todos los personas
router.get("/personas", (req, res) => {
    personaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Consultar un persona por su id
router.get("/personas/:id", (req, res) => {
    const { id } = req.params;
    personaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un persona por su id
router.put("/personas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    personaSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Eliminar un persona por su id

router.delete("/personas/:id", (req, res) => {
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
