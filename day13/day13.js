const fs = require('fs');
debugger;
const datos = fs.readFileSync("./day13/13-13.txt", "utf-8").split('\r\n');
const pares = [];
let suma = 0;
let estaEnOrden = true;
let desordenado = 0;
let prueba = datos[0];
console.log(eval(prueba));


const decodificar = () => {
  for(let i = 0; i < datos.length; i++){
    if(eval(datos[i]) !== undefined){
      pares.push(eval(datos[i]));
    }
  }
}
const verificar = (left,right) => {
  if(typeof left === 'number' && typeof right === 'number'){
    condicion1(left,right);
  }
  if(typeof left === 'object' && typeof right === 'object'){
    condicion2(left,right);
  }
}

const condicionGrande = (left,right) => {
  if (left.length > right.length){
    desordenado++;
    return false;
  }
  if (left.length < right.length){
    return true;
  }
  if (left.length === right.length){
    for(let i = 0; i < left.length; i++){
      return condicionGrande(left[i],right[i]);
    }
  }
}
const condicion1 = (left,right) => {
  if(left > right){
    estaEnOrden = false;
  }
}
const condicion2 = (left,right) => {
  
}
const condicion3 = (left,right) => {
  
}
const parte1 = () =>{
  for(let i = 0; i < pares.length; i = i +2){
    if(condicionGrande(pares[i],pares[i+1])){
      let index = Math.ceil((i+1)/2);
      suma += index;
      console.log('por ahora ordenado');
    }
  }
}
decodificar();
parte1();
console.log(desordenado);
console.log(suma);

debugger;