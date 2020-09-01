
let somme = 0;

for(let i = 2; i < process.argv.length; i++)
{
    somme += process.argv[i].length;
}


const somme2 = process.argv.slice(2).map((s) => s.length).reduce((a,b) => a + b, 0);

console.log(somme2)
