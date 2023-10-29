const connection = require('../models').connection;

const controller = {
    resetDb: (req, res) => {
        connection.sync({force: true,})
            .then(() => res.status(200).send('DB resetat cu succes!'))
            .catch(err => {
                console.log(err);
                res.status(500).send('Eroare la resetarea db!');
            });
    },
};

module.exports = controller;