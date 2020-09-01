
var markdownit  = require('markdown-it');
const md = markdownit();
var fs = require('fs');

//const filename = proces.argv[2];
//const outputFilename = process.argv[3];
var fileName = "./monFichierMarkdown.md";
var outputFilename = "./monFichierHTML.html";

fs.readFile(fileName, 'utf8', function(err, contents) {
    const html = md.render(contents);
    fs.writeFile(outputFilename, html, (error) => {
      console.log('fini');
    })
});
