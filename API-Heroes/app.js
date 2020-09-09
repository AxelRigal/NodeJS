const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const tab = [{ "id":1,"name":"Superman"}, {"id":2, "name":"Batman"}];
app.get('/api/heroes', (req, res) => {
  console.log("OK GET ");
  res.json(tab);
});

app.get('/api/heroes/:id', (req, res) => {
  let found = tab.find(item => {
      return item.id === parseInt(req.params.id);
  });
  res.json(found);
});

app.post('/api/heroes', (req, res) => {
  const newHeroe = req.body;
  tab.push(newHeroe);
  console.log("OK POST ");
  res.status(201).json();
});

app.delete('/api/heroes/:id', (req, res) => {
  var idRemove  = req.params.id;
  tab.splice(idRemove,1);
  console.log("OK DELETE");
  res.status(201).json();
});
app.listen(8080);
