let monModule = require('./monModule');

let h = monModule.hello;
let name = process.argv[2];

let message = h(name);

console.log(message);
console.log(monModule.bonjour(name));
