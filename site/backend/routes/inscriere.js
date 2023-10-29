const express = require('express');
const router = express.Router();

const inscriereController = require('../controllers/inscriere');

router.post('/adauga', inscriereController.adaugaInscriere);

module.exports = router;