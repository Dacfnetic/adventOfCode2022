const fs = require('fs');

const datos = fs.readFileSync("./day9/09-09.txt", "utf-8").split("\r\n")
class Head {
  constructor(instructions){
    this.steps = [],
    this.recorrido = [],
    this.actual = [0,0],
    this.tail1Actual = [0,0],
    this.recorridoTail1 = [[0,0]],
    this.tail2Actual = [0,0],
    this.recorridoTail2 = [[0,0]],
    this.tail3Actual = [0,0],
    this.recorridoTail3 = [[0,0]],
    this.tail4Actual = [0,0],
    this.recorridoTail4 = [[0,0]],
    this.tail5Actual = [0,0],
    this.recorridoTail5 = [[0,0]],
    this.tail6Actual = [0,0],
    this.recorridoTail6 = [[0,0]],
    this.tail7Actual = [0,0],
    this.recorridoTail7 = [[0,0]],
    this.tail8Actual = [0,0],
    this.recorridoTail8 = [[0,0]],
    this.tail9Actual = [0,0],
    this.recorridoTail9 = [[0,0]]
  }
  moverColaDiagonal(adelante, atras, tailN){
    
    if(adelante[0]-atras[0] > 0){
      atras[0] += 1;
    }
    if(adelante[0]-atras[0] < 0){
      atras[0] -= 1;
    }
    if(adelante[1]-atras[1] > 0){
      atras[1] += 1;
    }
    if(adelante[1]-atras[1] < 0){
      atras[1] -= 1;
    }
    let nuevo = [atras[0], atras[1]];
    tailN.push(nuevo);
  }
  moverColaOrtogonal(adelante, atras, tailN){
    
    if(adelante[0]-atras[0] > 0){
      atras[0] += 1;
    }
    if(adelante[0]-atras[0] < 0){
      atras[0] -= 1;
    }
    if(adelante[1]-atras[1] > 0){
      atras[1] += 1;
    }
    if(adelante[1]-atras[1] < 0){
      atras[1] -= 1;
    }
    let nuevo = [atras[0], atras[1]];
    tailN.push(nuevo);
  }
  activarMoverCola(adelante, atras, tailN){
    if(Math.abs(adelante[0]-atras[0]) == 1 && Math.abs(adelante[1]-atras[1]) > 1 || Math.abs(adelante[1]-atras[1]) == 1 && Math.abs(adelante[0]-atras[0]) > 1){
      this.moverColaDiagonal(adelante, atras, tailN);
    }
    if(Math.abs(adelante[0]-atras[0]) > 1 || Math.abs(adelante[1]-atras[1]) > 1){
      this.moverColaOrtogonal(adelante, atras, tailN);
    }
    
  }
  obtenerPasos (instrucciones){
    let pasos = instrucciones.map(elemento => elemento.split(' '));
    this.steps = pasos;
  }
  mover () {
    for(let i = 0; i<this.steps.length; i++){
      if(this.steps[i][0] === 'R'){
        for(let j = 0; j < this.steps[i][1]; j++){
          this.actual[0] += 1;
          let nuevo = [this.actual[0], this.actual[1]];
          this.recorrido.push(nuevo);
          this.activarMoverCola(this.actual,this.tail1Actual,this.recorridoTail1);
          this.activarMoverCola(this.tail1Actual,this.tail2Actual,this.recorridoTail2);
          this.activarMoverCola(this.tail2Actual,this.tail3Actual,this.recorridoTail3);
          this.activarMoverCola(this.tail3Actual,this.tail4Actual,this.recorridoTail4);
          this.activarMoverCola(this.tail4Actual,this.tail5Actual,this.recorridoTail5);
          this.activarMoverCola(this.tail5Actual,this.tail6Actual,this.recorridoTail6);
          this.activarMoverCola(this.tail6Actual,this.tail7Actual,this.recorridoTail7);
          this.activarMoverCola(this.tail7Actual,this.tail8Actual,this.recorridoTail8);
          //debugger;
          this.activarMoverCola(this.tail8Actual,this.tail9Actual,this.recorridoTail9);
        }    
      }
      if(this.steps[i][0] === 'U'){
        for(let j = 0; j < this.steps[i][1]; j++){
          this.actual[1] += 1;
          let nuevo = [this.actual[0], this.actual[1]];
          this.recorrido.push(nuevo);
          this.activarMoverCola(this.actual,this.tail1Actual,this.recorridoTail1);
          this.activarMoverCola(this.tail1Actual,this.tail2Actual,this.recorridoTail2);
          this.activarMoverCola(this.tail2Actual,this.tail3Actual,this.recorridoTail3);
          this.activarMoverCola(this.tail3Actual,this.tail4Actual,this.recorridoTail4);
          this.activarMoverCola(this.tail4Actual,this.tail5Actual,this.recorridoTail5);
          this.activarMoverCola(this.tail5Actual,this.tail6Actual,this.recorridoTail6);
          this.activarMoverCola(this.tail6Actual,this.tail7Actual,this.recorridoTail7);
          this.activarMoverCola(this.tail7Actual,this.tail8Actual,this.recorridoTail8);
          //debugger;
          this.activarMoverCola(this.tail8Actual,this.tail9Actual,this.recorridoTail9);
        }    
      }
      if(this.steps[i][0] === 'L'){
        for(let j = 0; j < this.steps[i][1]; j++){
          this.actual[0] -= 1;
          let nuevo = [this.actual[0], this.actual[1]];
          this.recorrido.push(nuevo);
          this.activarMoverCola(this.actual,this.tail1Actual,this.recorridoTail1);
          this.activarMoverCola(this.tail1Actual,this.tail2Actual,this.recorridoTail2);
          this.activarMoverCola(this.tail2Actual,this.tail3Actual,this.recorridoTail3);
          this.activarMoverCola(this.tail3Actual,this.tail4Actual,this.recorridoTail4);
          this.activarMoverCola(this.tail4Actual,this.tail5Actual,this.recorridoTail5);
          this.activarMoverCola(this.tail5Actual,this.tail6Actual,this.recorridoTail6);
          this.activarMoverCola(this.tail6Actual,this.tail7Actual,this.recorridoTail7);
          this.activarMoverCola(this.tail7Actual,this.tail8Actual,this.recorridoTail8);
          //debugger;
          this.activarMoverCola(this.tail8Actual,this.tail9Actual,this.recorridoTail9);
        }    
      }
      if(this.steps[i][0] === 'D'){
        for(let j = 0; j < this.steps[i][1]; j++){
          this.actual[1] -= 1;
          let nuevo = [this.actual[0], this.actual[1]];
          this.recorrido.push(nuevo);
          this.activarMoverCola(this.actual,this.tail1Actual,this.recorridoTail1);
          this.activarMoverCola(this.tail1Actual,this.tail2Actual,this.recorridoTail2);
          this.activarMoverCola(this.tail2Actual,this.tail3Actual,this.recorridoTail3);
          this.activarMoverCola(this.tail3Actual,this.tail4Actual,this.recorridoTail4);
          this.activarMoverCola(this.tail4Actual,this.tail5Actual,this.recorridoTail5);
          this.activarMoverCola(this.tail5Actual,this.tail6Actual,this.recorridoTail6);
          this.activarMoverCola(this.tail6Actual,this.tail7Actual,this.recorridoTail7);
          this.activarMoverCola(this.tail7Actual,this.tail8Actual,this.recorridoTail8);
          //debugger;
          this.activarMoverCola(this.tail8Actual,this.tail9Actual,this.recorridoTail9);
        }    
      }
    }
  }
}

debugger;

debugger;
const Cabeza = new Head();
Cabeza.obtenerPasos(datos);
Cabeza.mover();

const cola = new Map();
Cabeza.recorridoTail9.forEach(elemento => cola.set(elemento.toString(), 1));

console.log(cola.size);

debugger;