// import axios from "./node_modules/axios";
// const axios = require('axios');

const URL = "http://localhost:8080/adaugaInscriere";

const nume = document.getElementById('nume');
const prenume = document.getElementById('prenume');
const email = document.getElementById('email');
const telefon = document.getElementById('telefon');
const costume = document.getElementById('costume');
const dovleci = document.getElementById('dovleci');

const btnSubmit = document.getElementById('btnSubmit');

const headerObj = {
  headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
  }
}

let p = document.createElement('p');

btnSubmit.addEventListener('click', async (e) => {

  e.preventDefault();
  e.stopPropagation();

  const data = {
    nume: nume.value,
    prenume: prenume.value,
    email: email.value,
    telefon: parseInt(telefon.value),
    costume: costume.checked,
    dovleci: dovleci.checked
  };

  // console.log(data);

  p.classList.add('paragraf-eroare');
  p.textContent = '';

  let response;
  try {
    response = await axios.post(URL, data, headerObj);
    console.log(response);
    // alert('Inscriere adaugata cu succes!');
    p.textContent = 'Inscriere adaugata cu succes!';
    p.style.backgroundColor = 'green';
  } catch (err) {
    console.log(err.response.data);
    if (err.response.data == 'Nume incorect!') {
      // alert("Nume incorect!");
      p.textContent = "Nume incorect!";
      p.style.backgroundColor = '#ff00008a';
    } else if (err.response.data == 'Prenume incorect!') {
      // alert('Prenume incorect!');
      p.textContent = 'Prenume incorect!';
      p.style.backgroundColor = '#ff00008a';
    } else if (err.response.data == 'Email incorect!') {
      // alert('Email incorect!');
      p.textContent = 'Email incorect!';
      p.style.backgroundColor = '#ff00008a';
    } else if (err.response.data == 'Telefon incorect!') {
      // alert('Telefon incorect!');
      p.textContent = 'Telefon incorect!';
      p.style.backgroundColor = '#ff00008a';
    } else if (err.response.data == 'Alegeri incorecte!') {
      alert('Nu ati ales corect participarea la activitati!');
    } else {
      // alert('Email-ul sau numarul de telefon au fost deja folosite! (sau baza de date nu este pornita🐊)');
      p.textContent = 'Email-ul sau numarul de telefon au fost deja folosite! (sau baza de date nu este pornita🐊)';
      p.style.backgroundColor = '#ff00008a';
    }
  }
  if (p.textContent !== '')
    document.querySelector('form').appendChild(p);

  if (p.textContent !== '') {
    const form = document.querySelector('form');
    form.classList.add('eroare');
  }
});