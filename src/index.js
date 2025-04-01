//Express
const express = require ('express');
const app = express();


app.use(express.json());

const dbConexion = require('./config/mongo.config');
dbConexion();

//http://localhost:3000/
app.use('/api/empleados', require ('./routes/empleados.routes'));
app.use('/api/areas', require('./routes/areas.routes'));


app.listen(3000, function(){
    console.log('Servidor si esta corriendo');
});