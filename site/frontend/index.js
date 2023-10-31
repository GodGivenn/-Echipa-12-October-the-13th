// import axios from "./node_modules/axios";
// const axios = require('axios');

const URL = "http://localhost:8080/inscriere/adauga";

const nume = document.getElementById('nume');
const prenume = document.getElementById('prenume');
const email = document.getElementById('email');
const telefon = document.getElementById('telefon');
const costume = document.getElementById('costume');
const dovleci = document.getElementById('dovleci');

const btnSubmit = document.getElementById('btnSubmit');

const headerObj = {
  headers: {
      'Content-Type': 'application/json'
  }
}

btnSubmit.addEventListener('click', async () => {

  const data = {
    nume: nume.value,
    prenume: prenume.value,
    email: email.value,
    telefon: parseInt(telefon.value),
    costume: costume.checked,
    dovleci: dovleci.checked
  };

  // console.log(data);

  await axios.post(URL, data, headerObj)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});