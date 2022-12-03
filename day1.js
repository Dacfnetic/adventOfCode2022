const fs = require('fs');

const file = fs.readFileSync('./01-01.txt');

const caloriesOfElves = file.toString().split('\r\n');

const entries = caloriesOfElves.length;
let elves = [];
let calories = 0;
let actual = 0;

for(let i = 0; i < entries; i++){    
    actual = Number(caloriesOfElves.pop())
    calories = calories + actual;
    if(actual === 0){
        elves.push(calories);
        calories = 0;
    }
}
calories = 0;

elves.sort((a,b)=>a-b);

console.log('Question 1: ', elves[elves.length-1]);

for(let i = 0; i<3;i++){
    calories += elves[elves.length-1-i];
}
console.log('Question 2: ',calories);