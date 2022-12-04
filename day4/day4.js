const fs = require('fs');

const file = fs.readFileSync('./04-04.txt');

const listOfItems = file.toString().split('\r\n');
const arrayOfRooms = listOfItems.map(pairOfElves =>{
    pairOfElves = pairOfElves.split(',');
    return pairOfElves;
});

let quantityOfOnesContainsOthers = 0;
let overlapes = 0;

function calculateCompletesOverlapes () {
    arrayOfRooms.forEach(rooms => {
        let elf1 = {
            max: Number(rooms[0].split('-')[1]),
            min: Number(rooms[0].split('-')[0])
        }
        let elf2 = {
            max: Number(rooms[1].split('-')[1]),
            min: Number(rooms[1].split('-')[0])
        }
        if((elf1.max >= elf2.max && elf1.min <= elf2.min) || (elf2.max >= elf1.max && elf2.min <= elf1.min)){
            quantityOfOnesContainsOthers++;
        }
    });
    console.log('Ones contains others:',quantityOfOnesContainsOthers);
}

function calculateOverlapes () {
    arrayOfRooms.forEach(rooms => {
        let elf1 = {
            max: Number(rooms[0].split('-')[1]),
            min: Number(rooms[0].split('-')[0])
        }
        let elf2 = {
            max: Number(rooms[1].split('-')[1]),
            min: Number(rooms[1].split('-')[0])
        }
        if(!((elf2.min > elf1.max) || (elf1.min > elf2.max))){
            overlapes++;
        }
    });
    console.log('Total of overlapes:',overlapes);
}

calculateCompletesOverlapes();
calculateOverlapes();
