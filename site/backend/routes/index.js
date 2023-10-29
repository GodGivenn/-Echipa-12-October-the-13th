const express = require('express');
const router = express.Router();

const otherRouter = require('./other');
const inscriereRouter = require('./inscriere');

router.use('/reset', otherRouter);
router.use('/inscriere', inscriereRouter);

module.exports = router;