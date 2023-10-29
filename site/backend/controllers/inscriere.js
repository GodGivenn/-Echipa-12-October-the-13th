const Inscrieri = require('../models').inscriere;

const controller = {
    adaugaInscriere: (req, res) => {
        const {nume, prenume, email, telefon, costume, dovleci} = req.body;

        Inscrieri.create({nume, prenume, email, telefon, costume, dovleci})
            .then((inscriere) => {
                res.status(200).send(inscriere);
            })
            .catch(err => {
                console.log(err);
                res.status(500).send('Eroare la crearea inscrierii!');
            });
    },
};

module.exports = controller;