const express = require('express');

const app = express();

const middleWare = (request, response, next) => {
  response.send('Hello World');
  next();
}
app.get('/', function(req, res) {
  response.send('Hello World');
  next();
});
app.get('*', function(req, res) {
  response.send('Hello World');
  next();
});

app.get('/date', (request, response) => {
  var dAujourdhui = new Date();
  options.timeZone = "UTC";
  options.timeZoneName = "short";
  dAujourdhui.toLocaleDateString("fr-FR", options);
  response.send('<b> ' + dAujourdhui.toLocaleDateString("fr-FR", options) + ' <b>');
});



app.listen(8088);
