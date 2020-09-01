let monModule = require('./modulehello');

let name = process.argv;
let h = monModule.hellocount;
let message = h(name);
console.log(message);
