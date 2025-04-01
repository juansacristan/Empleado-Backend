const mongoose = require ('mongoose')

const EmpleadoSchema = new mongoose.Schema({
    codigo:{
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
    codigo_departamento:{
        type: Number
    }
});

const EmpleadoModel = mongoose.model(
    'empleado',
    EmpleadoSchema
);

module.exports = EmpleadoModel;