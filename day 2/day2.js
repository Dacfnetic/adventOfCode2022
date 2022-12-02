const fs = require('fs');

const file = fs.readFileSync('./02-02.txt');
const games = file.toString().split('\r\n');

let totalByElections = 0;
function one(games) {
    const pointsByElections = games.map(eleccion =>  {
        if(eleccion[2] === 'X'){
            if(eleccion[0]=== "A"){
                eleccion = 3;
            }
            if(eleccion[0]=== "B"){
                eleccion = 0;
            }
            if(eleccion[0]=== "C"){
                eleccion = 6;
            }
            eleccion += 1;
        }
        if(eleccion[2] === 'Y'){
            if(eleccion[0]=== "A"){
                eleccion = 6;
            }
            if(eleccion[0]=== "B"){
                eleccion = 3;
            }
            if(eleccion[0]=== "C"){
                eleccion = 0;
            }
            eleccion += 2;
        }
        if(eleccion[2] === 'Z'){
            if(eleccion[0]=== "A"){
                eleccion = 0;
            }
            if(eleccion[0]=== "B"){
                eleccion = 6;
            }
            if(eleccion[0]=== "C"){
                eleccion = 3;
            }
            eleccion += 3;
        }
        totalByElections += eleccion;
        return eleccion;
    });
    console.log(totalByElections);
    totalByElections = 0;
}
function two(games) {
    const pointsByElections = games.map(eleccion =>  {
        if(eleccion[2] === 'X'){
            if(eleccion[0]=== "A"){
                eleccion = 3;
            }
            if(eleccion[0]=== "B"){
                eleccion = 1;
            }
            if(eleccion[0]=== "C"){
                eleccion = 2;
            }
        }
        if(eleccion[2] === 'Y'){
            if(eleccion[0]=== "A"){
                eleccion = 1;
            }
            if(eleccion[0]=== "B"){
                eleccion = 2;
            }
            if(eleccion[0]=== "C"){
                eleccion = 3;
            }
            eleccion += 3;
        }
        if(eleccion[2] === 'Z'){
            if(eleccion[0]=== "A"){
                eleccion = 2;
            }
            if(eleccion[0]=== "B"){
                eleccion = 3;
            }
            if(eleccion[0]=== "C"){
                eleccion = 1;
            }
            eleccion += 6;
        }
        totalByElections += eleccion;
        return eleccion;
    });
    console.log(totalByElections);
    totalByElections = 0;
}
one(games);
two(games);
