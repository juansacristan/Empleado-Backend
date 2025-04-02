const mongoose = require ('mongoose')

const EmpleadoSchema = new mongoose.Schema({
    _id:{
        type: Number
    },
    nombre:{
        type: String
    },
    apellido1:{
        type: String
    },
    apellido2:{
        type: String
    },
    codigo_area:{
        type: mongoose.Schema.ObjectId,
        ref: 'area',
        required: true
    }
},{
    versionKey: false
});

const EmpleadoModel = mongoose.model(
    'empleado',
    EmpleadoSchema
);

module.exports = EmpleadoModel;