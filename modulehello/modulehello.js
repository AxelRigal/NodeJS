function hellocount(tab){
  return tab.slice(2).map((s) => s.length).reduce((a,b) => a + b, 0);
}


module.exports.hellocount = hellocount;
