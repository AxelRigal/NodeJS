const express = require('express');

const app = express();

app.get('/hello', (request, response) => {
console.log('handler appelé');
response.send('<html><body>Hello <b>World!</b></body></html>');
});


// handler pour http://localhost:8080/bonjouravecparams/Dominik

app.get('/bonjouravecparams/:nom', (request, response) => {
const nom = request.params.nom;
response.send('<html><body>Bonjour <b> ' + nom + ' !</b></body></html>');
});

// handler pour http://localhost:8080/bonjouravecquery?nom=Dominik

app.get('/bonjouravecquery', (request, response) => {
const nom = request.query.nom;
response.send('<html><body>Bonjour <b> ' + nom + ' !</b></body></html>');
});


console.log('Listening on port 8080...');
app.listen(8088);
