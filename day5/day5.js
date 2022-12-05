const fs = require('fs');

const file = fs.readFileSync('./05-05.txt');
const data = file.toString().split('\r\n');

let ship = new Map();
let ship2 = new Map();
for(let i = 1; i < 10; i++){
    ship.set(i,'');
    ship2.set(i,'');
}
for(let i = 7; i >= 0; i--){
    ship.set(1, ship.get(1) + data[i].substring(1,2));
    ship.set(2, ship.get(2) + data[i].substring(5,6));
    ship.set(3, ship.get(3) + data[i].substring(9,10));
    ship.set(4, ship.get(4) + data[i].substring(13,14));
    ship.set(5, ship.get(5) + data[i].substring(17,18));
    ship.set(6, ship.get(6) + data[i].substring(21,22));
    ship.set(7, ship.get(7) + data[i].substring(25,26));
    ship.set(8, ship.get(8) + data[i].substring(29,30));
    ship.set(9, ship.get(9) + data[i].substring(33,34));
}
for(let i = 1; i < 10; i++){
    let crates = ship.get(i).replaceAll(' ','');
    ship.set(i,crates);
    ship2.set(i,crates);
}
let listOfMovements = [];
for(let i = 10; i < data.length; i++){
    data[i] = data[i].replace('move ','');
    data[i] = data[i].replace('from ','');
    data[i] = data[i].replace('to ','');
    listOfMovements.push(data[i].split(' '));
    
}

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
});

listOfMovements.forEach(movement => {
    let grab = ship2.get(Number(movement[1]));
    let cuantity = Number(movement[0]);
    let antique = "";
    let nuovo = "";
    antique = grab.substring(0,grab.length-cuantity);
    nuovo = ship2.get(Number(movement[2])) + grab.substring(antique.length,grab.length);
    ship2.set(Number(movement[1]),antique);
    ship2.set(Number(movement[2]),nuovo);
});
let answer = ''
for(let i = 1; i < 10; i++){
    answer = answer + ship.get(i).substring(ship.get(i).length-1,ship.get(i).length);
}
console.log(answer)
answer = ''
for(let i = 1; i < 10; i++){
    answer = answer + ship2.get(i).substring(ship2.get(i).length-1,ship2.get(i).length);
}
console.log(answer)
