const mongoose = require("mongoose");
const { dbInsertArea, dbGetArea, dbDeleteArea, dbGetByIdArea, dbUpdateByIdArea } = require("../services/areas.service");

async function createArea (req, res){
    const inputData = req.body;

    try {
        const data = await dbInsertArea (inputData);
        res.json({
            ok: true,
            msg: 'Post si funciona para registrar el area',
            data: data
        })
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error por crear el area, debe arreglar dentro codigo'
        })
        
    }

};

async function getArea (req, res) {
    try {
        const data = await dbGetArea()
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al obtener todos las areas'
        })
    }
};

async function deleteArea (req, res) {
    const id = req.params.id
    try {
        const data = await dbDeleteArea(id);
        res.json({
            ok: true,
            data: data
        })
        
        
    } 
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al eliminar el area'
        })
    }
    
};

async function getbyidArea (req, res) {
    try {
        const data = await dbGetByIdArea(id);
        res.json({
            ok: true,
            data: data
        })
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: 'Error al obtener el area por Id'
        })
        
    }

};

async function patchArea (req, res) {
    const id = req.params.id;
    const inputData = req.body;

    try {
        const data = await dbUpdateByIdArea(id, inputData);
        res.json({
            ok: true,
            data: data
        });
    } 
    catch (error) {
        console.error(error);
        res.json({
            ok: false,
            msg: 'Ha ocurrido una excepcion al actualizar una area por id'
        })
    }
    
};


module.exports = {
    createArea,
    getArea,
    deleteArea,
    getbyidArea,
    patchArea
}