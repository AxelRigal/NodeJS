const loadJsonFile = require('load-json-file');
loadJsonFile('foo.json').then(json => {
  console.log(json);
  console.log('foo is ' + json.foo);
});
