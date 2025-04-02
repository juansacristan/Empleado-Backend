const mongoose = require ('mongoose')

const AreaSchema = new mongoose.Schema({
    codigo:{
        type: Number
    },
    nombre:{
        type: String
    }
},{
    versionKey: false
});
const AreaModel = mongoose.model(
    'area',
    AreaSchema
)

module.exports = AreaModel