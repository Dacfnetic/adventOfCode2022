const fs = require('fs');
debugger;
const datos = fs.readFileSync("data.txt", "utf-8").split('\r\n');

let frases = [];
datos.forEach(frase => {
    frase = frase.replaceAll('\\','');
    let quote = '';
    let author = '';
    let phrase = {};
    let index = frase.indexOf('(');
    quote = frase.slice(0, index).trim();
    author = frase.slice(index);
    phrase['frase'] = quote;
    phrase['autor'] = author;
    frases.push(phrase);
});
debugger;
console.log(frases);

/*
let exportar = JSON.stringify(frases);
exportar = exportar.replaceAll('\\','');*/
fs.appendFileSync('resultado.txt',datos.toString());
debugger;