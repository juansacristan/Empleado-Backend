const { dbGetByEmpleadoCode } = require("../services/empleados.service");

async function validateEmpleadoCodeExists(req, res, next){
    console.log('Soy el middleware de validación de usuario');

    const inputData = req.body;
    try {

    const dataFound = await dbGetByEmpleadoCode(inputData.codigo);

        if(dataFound){
            return res.json({
                ok: false,
                msg: 'El codigo del empleado ya existe'
            })
        }

    next();

    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg:'Ha ocurrido una excpecion al verificar si el codigo del empleado existe'
        })
        
    }



};


module.exports = validateEmpleadoCodeExists;