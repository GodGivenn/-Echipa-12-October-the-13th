const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use('/', router);

app.use(cors());

const port = 8080;

app.use('/', (req, res) => {
    res.status(200).send('Merge!');
})

app.options('/*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.sendStatus(204); // 204 -> no content
  });
  

app.listen(port, () => {
    console.log(`Aplicatia ruleza pe portul ${port}`);
})