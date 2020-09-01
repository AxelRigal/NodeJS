const somme2 = process.argv.slice(2).map((s) => parseInt(s)).reduce((a,b) => a + b, 0);

console.log(somme2)
