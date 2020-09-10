const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const Hero = require('./hero.model');
const mongooseClient = require('./mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.listen(config.port);


app.get('/api/heroes', function (req, res) {
  const query = {};
  if(req.query.name) {
    query.name = { '$regex': req.query.name};
  }
  Hero.find(query).then((heroes) => res.json(heroes))
    .catch((err) => res.status(500).send(err));
});

app.get('/api/heroes/:id', function(req, res) {
  Hero.findById(req.params.id).then((result) => res.json(result))
    .catch((err) => res.status(500).send(err));
});

app.post('/api/heroes', function (req, res) {
  const nouveauHero = new Hero(req.body);
  nouveauHero.save().then((hero) => res.json(hero))
    .catch((err) => res.status(500).send(err));
});

app.put('/api/heroes', function (req, res) {
  Hero.findByIdAndUpdate(req.body._id, req.body)
  .then((hero) => {
    if(hero) {
      res.json(hero);
    } else {
      res.sendStatus(404);
    }}).catch((err) => console.log(err));
});

app.delete('/api/heroes/:id', function(req, res) {
  Hero.findByIdAndRemove(req.params.id).then(() => res.sendStatus(200),
    () => res.sendStatus(404))
});

