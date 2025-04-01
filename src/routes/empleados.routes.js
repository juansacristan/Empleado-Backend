const express = require ('express');
const { getEmpleado, createEmpleado, deleteEmpleado, getbyidEmpleado, patchEmpleado } = require('../controllers/empleados.controllers');


const router = express.Router();

// http://localhost:3000/api/empleados


router.post('/', createEmpleado);
router.get('/', getEmpleado);
router.delete('/:id', deleteEmpleado);
router.get('/:id', getbyidEmpleado);
router.patch('/id', patchEmpleado);







// router.get('/', function (req, res){
//         res.json({
//             ok: true,
//             msg: 'Get si funciona para todos los empleados'
//         })
//     });


// router.delete('/:id', function (req, res){
//     const id = req.params.id;
//     const data = id;
//     res.json({
//         ok: true,
//         msg: 'Eliminar si funciona para el empleado',
//         data: data
//     })
// });    


module.exports = router;