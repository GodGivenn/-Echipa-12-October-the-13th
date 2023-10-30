const Inscrieri = require('../models').inscriere;

const controller = {
    adaugaInscriere: (req, res) => {
        const {nume, prenume, email, telefon, costume, dovleci} = req.body;

        let ok = 1;
        if (/\d/.test(nume) === true) {
            ok = 0;
        } else if (/\d/.test(prenume) === true) {
            ok = 0;
        } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) === false) {
            ok = 0;
        } else if (/^[0-9]+$/.test(telefon) === false) {
            ok = 0;
        } else if (typeof(costume) != 'boolean' || typeof(dovleci) != 'boolean') {
            ok = 0;
        }
        if (ok === 1) {
            Inscrieri.create({nume, prenume, email, telefon, costume, dovleci})
                .then((inscriere) => {
                    res.status(200).send(inscriere);
                    return 'Succes!';
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).send('Eroare la crearea inscrierii! (probabil emailul sau telefonul au mai fost deja folosite)');
                    return 'Error!';
                });
        } else {
            res.status(500).send('Datele introduse nu sunt corecte!');
        }

        
    },
    getAllInscrieri: (req, res) => {
        Inscrieri.findAll()
            .then(inscriere => {
                res.status(200).send(inscriere);
                console.log(inscriere);
            })
            .catch(err => {
                res.status(500).send(err);
            })
    },
    getAllCostume: (req, res) => {
        Inscrieri.findAll({
            where: {
                costume: true,
            }
        })
        .then(inscriere => {
            res.status(200).send(inscriere);
            console.log(inscriere);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    },
    getAllDovleci: (req, res) => {
        Inscrieri.findAll({
            where: {
                dovleci: true,
            }
        })
        .then(inscriere => {
            res.status(200).send(inscriere);
            console.log(inscriere);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    }
};

module.exports = controller;