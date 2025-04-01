const EmpleadoModel = require("../models/empleado.model");

async function dbInsertEmpleado (newEmpleado){
    return await EmpleadoModel.create (newEmpleado);
}

async function dbGetEmpleado (){
    return await EmpleadoModel.find();
}

async function dbDeleteEmpleado (id){
    return await EmpleadoModel.findOneAndDelete(id);
}

async function dbGetByIdEmpleado (id){
    return await EmpleadoModel.findById(id);
}

async function dbUpdateByIdEmpleado (id){
    return await EmpleadoModel.findById(id);
}

module.exports ={
    dbInsertEmpleado,
    dbGetEmpleado,
    dbDeleteEmpleado,
    dbGetByIdEmpleado,
    dbUpdateByIdEmpleado

}