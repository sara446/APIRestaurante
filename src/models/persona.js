const mongoose = require("mongoose"); // importando el componente mogoose
const personaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    gmail: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: false,
    },
    lugar: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Persona", personaSchema);
