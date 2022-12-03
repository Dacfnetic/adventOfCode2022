const fs = require('fs');

const file = fs.readFileSync('./day3/03-03.txt');
//const file = fs.readFileSync('./03-03.txt');
const listOfItems = file.toString().split('\r\n');

const valueOfItems = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26,
    A: 27, B: 28, C: 29, D: 30, E: 31, F: 32, G: 33, H: 34, I: 35, J: 36, K: 37, L: 38, M: 39, N: 40, O: 41, P: 42, Q: 43, R: 44, S: 45,
    T: 46, U: 47, V: 48, W: 49, X: 50, Y: 51, Z: 52
}

const elvesBagpackesDivided = listOfItems.map(items => {
    let indexOfMiddleItem = (items.length/2);
    let firstSlot = {};
    items.substring(0,indexOfMiddleItem).split('').forEach(element => firstSlot[element] = true, firstSlot)
    items = [firstSlot, items.substring(indexOfMiddleItem,items.length)];
    return items;
});
let acumulated = 0;
const sumOfItems = elvesBagpackesDivided.map(actualValue =>{
    let repeatedItem = '';
    actualValue[1].split('').forEach(prop =>{
        if(actualValue[0].hasOwnProperty(prop)){
            repeatedItem = prop;
            return repeatedItem;
        }
    });
    let val = Number(valueOfItems[repeatedItem]);
    acumulated += val;
})
console.log(acumulated);

let newArray = []
for(let i = 0; i < listOfItems.length; i+=3){
    let firstSlot = {};
    let secondSlot = {};
    listOfItems[i].split('').forEach(element => firstSlot[element] = true, firstSlot);
    listOfItems[i+1].split('').forEach(element => secondSlot[element] = true, secondSlot);
    newArray.push([firstSlot,secondSlot,listOfItems[i+2]]);
}
acumulated = 0;
const sumOfItems2 = newArray.map(actualValue =>{
    let repeatedItem = '';
    actualValue[2].split('').forEach(prop =>{
        if(actualValue[0].hasOwnProperty(prop)){
            if(actualValue[1].hasOwnProperty(prop)){
                repeatedItem = prop;
                return repeatedItem;
            }
        }
    });
    let val = Number(valueOfItems[repeatedItem]);
    acumulated += val;
})
console.log(acumulated);
