//node app.js Dominik

const mot = process.argv[2];

var foo = new Array(mot.length);
var tab = new Array(mot.length);
var motReturn = "";
for(var i = 0; i < foo.length; i++){
    do {
      var intLetter = Math.floor(Math.random() * mot.length + 1);
    } while (isInArray(intLetter, tab));
    tab.push(intLetter);
    motReturn += mot[intLetter-1];
}
console.log(motReturn);

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
