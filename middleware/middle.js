const express = require('express');

const app = express();

const logRequestMiddleware = (request, response, next) => {
  console.log('middleware' + request.url);
  next();
}

const deuxiemeMiddleWare = (request, response, next) => {
  console.log('middle ware 2');
}

app.use(logRequestMiddleware);
app.use(deuxiemeMiddleWare);
app.use(express.static('public'));

app.get('/hello', (request, response) =>{
  console.log('handler appelé');
  response.send('<html><body>Bonjour <b>!</b></body></html>');
})

app.listen(8080);
