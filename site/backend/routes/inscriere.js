const express = require('express');
const router = express.Router();

const inscriereController = require('../controllers/inscriere');

router.post('/adauga', inscriereController.adaugaInscriere);

router.get('/getAll', inscriereController.getAllInscrieri);

router.get('/getAllCostume', inscriereController.getAllCostume);

router.get('/getAllDovleci', inscriereController.getAllDovleci);



module.exports = router;