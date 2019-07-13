const fs = require('fs');
let textByLine = fs.readFileSync('./victor.txt').toString().split("");
let string = textByLine.join("")

const accent = { "à" : "a", "é" : "e", "è" : "e", "ù" : "u", "ê" : "e" , "â" : "a"
, "î" : "i", "ô" : "o", "û" : "u", "ç" : "c", "œ" : "oe", "ï" : "i" , "ë" : "e", "ü" : "ü"}

const mapReplace = (str, map) => {
    const matchStr = Object.keys(map).join('|');
    if (!matchStr) return str;
    const regexp = new RegExp(matchStr, 'g');
    return str.replace(regexp, match => map[match]);
  };

console.log(mapReplace(string, accent));

