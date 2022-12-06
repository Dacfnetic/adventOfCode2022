const fs = require('fs');

const file = fs.readFileSync('./day6/06-06.txt');
const data = file.toString();
let fourCharacters = [];
let fourteenCharacters = [];
for(let i = 0; i < data.length; i++){
    fourCharacters.push(data.substring(i,i+4).split('')); 
}
for(let i = 0; i < data.length; i++){
    fourteenCharacters.push(data.substring(i,i+14).split('')); 
}
const toFindDuplicates1 = (array) => {
    let duplicated = 0;
    const duplicates = array.filter((item, index) => {
        if(array.indexOf(item) !== index){
            duplicated++;
        }
    });
    if(duplicated === 0){
        console.log('La respuesta es:', fourCharacters.indexOf(array)+4);
        fourCharacters.length = 1;
    }
}
debugger;
let i = 0;
const toFindDuplicates2 = (array) => {
    let duplicated = 0;
    i++;
    console.log(i);
    const duplicates = array.filter((item, index) => {
        if(array.indexOf(item) !== index){
            duplicated++;
        }
    });
    if(duplicated === 0){
        console.log('La respuesta es:', fourteenCharacters.indexOf(array)+14);
        fourteenCharacters.length = 1;
    }
}
fourteenCharacters.forEach(element => toFindDuplicates2(element));
fourCharacters.forEach(element => toFindDuplicates1(element));


debugger;