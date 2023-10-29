const {Sequelize, DataTypes} = require('sequelize');

const database = require('../config/db');

module.exports = (database, DataTypes) => {
    return database.define("inscriere", {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    nume: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenume: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefon: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
    },
    costume: {
        type: DataTypes.BOOLEAN,
    },
    dovleci: {
        type: DataTypes.BOOLEAN,
    },
})
}