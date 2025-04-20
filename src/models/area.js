const mongoose = require("mongoose"); // importando el componente mogoose
const persona = require("./persona");

const areaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    persona: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Persona' }]
});
module.exports = mongoose.model("Area", areaSchema);