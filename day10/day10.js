const fs = require('fs');
let pantalla = [];


const datos = fs.readFileSync("./day10/10-10.txt", "utf-8").split("\r\n")
debugger;
let instructions = datos.map(ins => ins.split(' '));
let value = 1;
let cycle = 0;
let signal = 0;
function sumarSeñal(){
  if(cycle === 20 || cycle === 60 || cycle === 100 || cycle === 140 || cycle === 180 || cycle === 220){
    signal = signal + (cycle * value);
  }
}
let msg = '';
function pasoAPaso(ciclo) {
  console.clear();
  if(ciclo%40 === 0 && ciclo !== 0){
    msg = msg + '\n';
  }
  msg = msg + pantalla[ciclo];
  console.log(msg);
  debugger;
}
function dibujar(ciclo, multi){
  if(value-1 === multi || value === multi || value+1 === multi){
    if(value > 0){
      pantalla[ciclo] = '#';
    }else{
      pantalla[ciclo] = '.';
    }
  }else{
    pantalla[ciclo] = '.';
  }
  pasoAPaso(ciclo);
}
instructions.forEach(paso => {
  if(paso[0] === 'addx'){
    cycle++;
    dibujar(cycle - 1, cycle - (40 * Math.floor(cycle/40))-1);
    sumarSeñal();
    cycle++;
    dibujar(cycle - 1, cycle - (40 * Math.floor(cycle/40))-1);
    sumarSeñal();
    value = value + Number(paso[1]);
  }
  if(paso[0] === 'noop'){
    cycle++;
    dibujar(cycle - 1, cycle - (40 * Math.floor(cycle/40))-1);
    sumarSeñal()
  }
});
debugger;
console.log(signal);
let mensaje = '';
for(let i = 0; i < 240; i++){
  console.clear();
  if(i%40 === 0 && i !== 0){
    mensaje = mensaje + '\n';
  }
  mensaje = mensaje + pantalla[i];
  console.log(mensaje);
}


debugger;