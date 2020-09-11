const express = require('express');
const moment = require('moment');

const app = express();

const middleWare = (request, response, next) => {
  response.send('Hello World');
  next();
}

app.get('/date', (req, res) => {
  moment.locale("fr");
  res.send('<b> ' + moment().format('dddd Do MMMM YYYY') + ' <b>');
});

app.get('/', function(req, res) {
  res.send('Hello World');
});
app.get('*', function(req, res) {
  res.send('Hello World');
});

app.listen(8088);
