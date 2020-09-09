const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

let id_counter = 22;

app.get('/api/heroes', function (req, res) {  
  if(req.query.name) {
    const searchHeros = heroes.filter((hero) => hero.name.toLowerCase().indexOf(req.query.name.toLowerCase()) !== -1);
    res.json(searchHeros);
  } else {
    res.json(heroes);
  }
});

app.get('/api/heroes/:id', function(req, res) {
  const a = heroes.find((hero) => hero.id === parseInt(req.params.id));
  if (a) {
    res.json(a);
  } else {
    res.sendStatus(404);
  }
});

app.post('/api/heroes', function (req, res) {
  req.body.id = id_counter++;
  heroes.push(req.body);
  res.json(req.body);
});

app.put('/api/heroes', function (req, res) {
  const idx = heroes.indexOf(heroes.find((hero) => hero.id === parseInt(req.body.id)));
  if (idx > -1) {
    heroes.splice(idx, 1, req.body);
  }
  res.json(req.body);
});

app.delete('/api/heroes/:id', function(req, res) {
  const idx = heroes.indexOf(heroes.find((hero) => hero.id === parseInt(req.params.id)));
  if (idx > -1) {
    heroes.splice(idx, 1);
    res.json();
  } else {
    res.sendStatus(404);
  }
});

app.listen(8084);
