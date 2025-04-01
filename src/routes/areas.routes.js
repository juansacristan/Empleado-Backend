const express = require ('express');
const { createArea, getArea, deleteArea, getbyidArea, patchArea } = require('../controllers/areas.controllers');

const router = express.Router();

// http://localhost:3000/api/areas

router.post('/', createArea);
router.get('/', getArea);
router.delete('/:id', deleteArea);
router.get('/:id', getbyidArea);
router.patch('/id', patchArea);


module.exports = router;