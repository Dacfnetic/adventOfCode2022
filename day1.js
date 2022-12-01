const fs = require('fs');

const file = fs.readFileSync('./01-01.txt');

const myArray = file.toString().split('\r\n');
const antElves = file.toString().split('\r\n');
let elves = [];
let calories = 0;
let actual = 0;

for(let i = 0; i < myArray.length; i++){    
    actual = Number(antElves.pop())
    calories = calories + actual;
    if(actual === 0){
        elves.push(calories);
        calories = 0;
    }
}
calories = 0;
index = 0;
for(let i = 0; i<3;i++){
    index = elves.indexOf(Number(Math.max(...elves)));
    calories += Number(Math.max(...elves));
    console.log(elves.length);
    elves.splice(index,1);
    console.log(elves.length);
}


/*calories += elves.indexOf(Math.max(...elves)).pop();
calories += elves.indexOf(Math.max(...elves)).pop();*/
console.log(elves.reverse());
console.log(calories);