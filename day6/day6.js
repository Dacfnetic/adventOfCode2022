/*const fs = require('fs');

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
*/

debugger;

const fs = require('fs');

const data = fs.readFileSync('./day6/06-06.txt', 'utf-8').trim();

const findUniques = (length) => {
    const list = [];
    let count = 0;
    for (let next of data.split('')) {
        list.push(next);
        count++;
        // If we have less than the length we need to keep going
        if (list.length < length) continue;
        // If we have the length we need to check if we have a unique set
        if (new Set(list).size === length) break;
        list.shift();
    }
    return count;
};

// part 1
console.log(findUniques(4));
// part 2
console.log(findUniques(14));