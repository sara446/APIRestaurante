const mongoose = require("mongoose"); // importando el componente mogoose
const persona = require("./persona");

const reservaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cantidadPersonas: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    persona: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Persona' }]
});
module.exports = mongoose.model("reserva", reservaSchema);