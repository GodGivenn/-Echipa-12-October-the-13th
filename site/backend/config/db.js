const Sequelize = require('sequelize');

const sequelize = new Sequelize("october_the_13th", "root", "", {
    dialect: "mysql",
    host: "localhost",
    logging: false,
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true,
    },
    port: 7777,
});

module.exports = sequelize;