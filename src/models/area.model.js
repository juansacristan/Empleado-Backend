const mongoose = require ('mongoose')

const AreaSchema = new mongoose.Schema({
    codigo:{
        type: Number
    },
    nombre:{
        type: String
    }
});
const AreaModel = mongoose.model(
    'areas',
    AreaSchema
)

module.exports = AreaModel