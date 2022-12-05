const fs = require('fs');

//const file = fs.readFileSync('./04-04.txt');
const file = fs.readFileSync('./day5/05-05p.txt');
const data = file.toString().split('\r\n');
let ship = new Map();
let ship2 = new Map();
for(let i = 1; i < 4; i++){
    ship.set(i,'')
    ship2.set
}
for(let i = 2; i >= 0; i--){
    ship.set(1, ship.get(1) + data[i].substring(1,2));
    ship.set(2, ship.get(2) + data[i].substring(5,6));
    ship.set(3, ship.get(3) + data[i].substring(9,10));
}
for(let i = 1; i < 4; i++){
    let crates = ship.get(i).replaceAll(' ','');
    ship.set(i,crates);
}/*
for(let i = 1; i < 10; i++){
    ship.set(i,ship.get(i).split(''));
}*/
let listOfMovements = [];
for(let i = 5; i < data.length; i++){
    data[i] = data[i].replace('move ','');
    data[i] = data[i].replace('from ','');
    data[i] = data[i].replace('to ','');
    listOfMovements.push(data[i].split(' '));
    
}
debugger;
listOfMovements.forEach(movement => {
    
    let cuantity = Number(movement[0]);
    for(let i = 0; i < cuantity; i++){
        let grab = ship.get(Number(movement[1]));
        let antique = "";
        let nuovo = "";
        antique = grab.substring(0,grab.length-1);
        nuovo = ship.get(Number(movement[2])) + grab.substring(grab.length-1);
        ship.set(Number(movement[1]),antique);
        ship.set(Number(movement[2]),nuovo);
    }
    debugger;
});
let answer = ''

for(let i = 1; i < 4; i++){
    answer = answer + ship.get(i).substring(ship.get(i).length-1,ship.get(i).length);
}
console.log(answer);

debugger;
