const mongoose = require("mongoose"); // importando el componente mogoose
const personaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    cedula: {
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
    direccion: {
        type: String,
        required: true,
    },
    codigo: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Persona", personaSchema);
