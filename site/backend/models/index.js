const inscriereModel = require('./inscriere');
const db = require('../config/db');
const { Sequelize } = require('sequelize');

const inscriere = inscriereModel(db, Sequelize);

module.exports = {
    inscriere,
    connection: db
}