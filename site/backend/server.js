const express = require('express');
const router = require('./routes');
const cors = require('cors');
// const routerExpress = express.Router();

const app = express();

app.use(express.json());
app.use('/', router);

app.use(cors());

const port = 8080;

// app.use('/', (req, res) => {
//     res.status(200).send('Merge!');
// })


// Nu stiu de ce nu merge sa dau in front ruta creata in routes -> http://localhost:8080/inscriere/adauga
// Primesc o eroare legata de CORS, asa ca am pus aici o alta ruta cu tot cu post request-ul si validarile de rigoare
const Inscrieri = require('./models').inscriere;  
app.post("/adaugaInscriere", (req, res) => {
    const {nume, prenume, email, telefon, costume, dovleci} = req.body;

        console.log(req.body);
        console.log({nume, prenume, email, telefon, costume, dovleci});

        let ok = 1;
        if (/\d/.test(nume) === true) {
            ok = 0;
            res.status(500).send('Nume incorect!');
        } else if (/\d/.test(prenume) === true) {
            ok = 0;
            res.status(500).send('Prenume incorect!');
        } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) === false) {
            ok = 0;
            res.status(500).send('Email incorect!');
        } else if (/^([0-9]+)$/.test(telefon) === false) {
            ok = 0;
            res.status(500).send('Telefon incorect!');
        } else if (typeof(costume) != 'boolean' || typeof(dovleci) != 'boolean') {
            ok = 0;
            res.status(500).send('Alegeri incorecte!');
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
  });

app.listen(port, () => {
    console.log(`Aplicatia ruleza pe portul ${port}`);
})