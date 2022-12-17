const fs = require('fs');

let data = fs.readFileSync('./day15/15-15.txt', 'utf-8');
debugger;
data = data.replaceAll('Sensor at x=','');
data = data.replaceAll(' closest beacon is at x=','');
data = data.replaceAll(' y=','');
data = data.replaceAll(':',',');
data = data.split('\r\n');
let sensorsX = [];
let sensorsY = [];
let beaconsX = [];
let beaconsY = [];
let datos = [];
for(let i = 0; i < data.length; i++){
    datos.push(data[i].split(','));
}
for(let i = 0; i < datos.length; i++){
    sensorsX.push(Number(datos[i][0]));
    sensorsY.push(Number(datos[i][1]));
    beaconsX.push(Number(datos[i][2]));
    beaconsY.push(Number(datos[i][3]));
}
let cantidad = sensorsX.length;
let minSensorX = Math.min(...sensorsX);
let maxSensorX = Math.max(...sensorsX);
let minSensorY = Math.min(...sensorsY);
let maxSensorY = Math.max(...sensorsY);
let minBeaconsX = Math.min(...beaconsX);
let maxBeaconsX = Math.max(...beaconsX);
let minBeaconsY = Math.min(...beaconsY);
let maxBeaconsY = Math.max(...beaconsY);
let minX = Math.min(minSensorX,minBeaconsX);
let maxX = Math.max(maxSensorX,maxBeaconsX);
let minY = Math.min(minSensorY,minBeaconsY);
let maxY = Math.max(maxSensorY,maxBeaconsY);
let pantalla = [];
const crearPantalla = () => {
    for(let j = minY; j < maxY; i++){
        for(let i = minX; i < maxX; j++){
            
        }
    }
}
for(let i = 0; i < cantidad; i++){

}

debugger;
