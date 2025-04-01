const { dbInsertEmpleado, dbGetEmpleado, dbDeleteEmpleado, dbGetByIdEmpleado, dbUpdateByIdEmpleado } = require("../services/empleados.service");

async function createEmpleado (req, res){
        const inputData = req.body;
        try {
            const data = await dbInsertEmpleado (inputData);
            res.json({
                ok:true,
                msg: 'Post si funciona para registrar el empleado',
                data: data
            });
        } 
        catch (error) {
            console.error(error)
            res.json({
                ok: false,
                msg: 'Error por crear empleado, deb arreglar dentro codigo'
            })
        }
    }


async function getEmpleado (req,res){

    try {
        const data = await dbGetEmpleado();
        res.json({
            ok:true,
            data: data
        })
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al obtener todos los empleados'
        })
    }

}

async function deleteEmpleado (req,res){
    const id = req.params.id
    try {
        const data = await dbDeleteEmpleado(id);
        res.json({
            ok: true,
            data: data
        })
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al eliminar el empleado'
        })
    }

}

async function getbyidEmpleado (req,res){
    try {
        const data = await dbGetByIdEmpleado(id);
        res.json({
            ok: true,
            msg: 'Actualizar si funciona para el empleado',
            data: data
        })
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al obtener empleo por Id'
        })
    }

}

async function patchEmpleado(req,res){
    const id = req.params.id;
    const inputData = req.body;
    try {
        const data = dbUpdateByIdEmpleado(id, inputData);
        res.json({
            ok: true,
            msg: 'Editar si funciona para el empleado',
            data: data
        })
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al actualizar un empleado por id'
        })
    }

}


module.exports = {
    createEmpleado,
    getEmpleado,
    deleteEmpleado,
    getbyidEmpleado,
    patchEmpleado
}