const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use('/', router);

const port = 8080;

app.use('/', (req, res) => {
    res.status(200).send('Merge!');
})

app.listen(port, () => {
    console.log(`Aplicatia ruleza pe portul ${port}`);
})