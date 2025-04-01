const AreaModel = require("../models/area.model");


async function dbInsertArea (newArea) {
    return await AreaModel.create (newArea);
};

async function dbGetArea() {
    return await AreaModel.find();
};

async function dbDeleteArea(id) {
    return await AreaModel.findOneAndDelete(id);    
};

async function dbGetByIdArea(id) {
    return await AreaModel.findById(id);
};

async function dbUpdateByIdArea(id) {
    return await AreaModel.findByIdAndUpdate(id);
};

module.exports = {
    dbInsertArea,
    dbGetArea,
    dbDeleteArea,
    dbGetByIdArea,
    dbUpdateByIdArea
}