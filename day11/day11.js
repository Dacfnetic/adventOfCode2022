const fs = require('fs');
const { join } = require('path');

const datos = fs.readFileSync("./day11/11-11.txt", "utf-8").split("\r\n");

let modulo = 1;
class mono {
  constructor(number, startingItems, operation, test, testingNumber) {
    this.inspectedItems = 0;
    this.number = number;
    this.startingItems = startingItems;
    this.operation = operation;
    this.test = test;
    this.testingNumber = testingNumber;
    this.actualItems = [];
    this.throwTo = [];
    this.__fillItems();
  }
  changeWorryLevel (part){
    if(part === '1'){
      for(let i = 0; i < this.startingItems.length; i++){
        this.startingItems[i] = this.operation(this.startingItems[i]);
        this.startingItems[i] = Math.floor(this.startingItems[i]/3);
        this.inspectedItems++;
      }
    }
    if(part === '2'){
      for(let i = 0; i < this.startingItems.length; i++){
        this.startingItems[i] = this.operation(this.startingItems[i]) % modulo;
        this.inspectedItems++;
      }
    }
    
  }
  __fillItems(){
    for(let i = 0; i < this.startingItems.length; i++){
      this.throwTo.push(0);
    }
  }
  testing(){
    for(let i = 0; i < this.startingItems.length; i++){
      this.throwTo[i] = this.test(this.startingItems[i]);
    }
  }
  throwItems(){
    let quitar = this.startingItems.length;
    for(let i = 0; i < this.startingItems.length; i++){
      monos[this.throwTo[i]].startingItems.push(this.startingItems[i]);
    }
    for(let i = 0; i < quitar; i++){
      this.startingItems.pop();
      this.throwTo.pop();
    }
  }
}
let monos = [];
let number = 0;
let startingItems = [];
let operation = () => {};
let test = () => {};
counter = 0;
let divi = 0;
datos.forEach(linea => {
  if(linea.includes('Monkey')){
    linea = linea.replace('Monkey ', '');
    linea = linea.replace(':', '');
    number = Number(linea);
  }
  if(linea.includes('Starting')){
    linea = linea.replace('  Starting items: ', '');
    startingItems = linea.split(', ');
    for(let i = 0; i< startingItems.length; i++){
      startingItems[i] = Number(startingItems[i]);
    }
  }
  if(linea.includes('Operation')){
    if(linea.includes('old * old')){
      operation = (old) => old * old;
    }else{
      linea = linea.replace('Operation: new = ', '');
      linea = linea.replace('old', '');
      linea = linea.replace(' ', '');
      linea = linea.replace(' ', '');
      linea = linea.replace(' ', '');
      let procedimiento = linea.split(' ');
      let operator = procedimiento[0];
      let cantidad = Number(procedimiento[1]);
      if(operator === '+'){
        operation = (old) => old + cantidad;
      }
      if(operator === '-'){
        operation = (old) => old - cantidad;
      }
      if(operator === '*'){
        operation = (old) => old * cantidad;
      }
      if(operator === '/'){
        operation = (old) => old / cantidad;
      }
    }
  }
  if(linea.includes('Test')){
    linea = linea.replace('  Test: divisible by ', '');
    let divisible = Number(linea);
    divi = Number(linea);
    datos[counter + 1] = datos[counter + 1].replace('    If true: throw to monkey ', '');
    let ifTrue = Number(datos[counter + 1]);
    datos[counter + 2] = datos[counter + 2].replace('    If false: throw to monkey ', '');
    let ifFalse = Number(datos[counter + 2]);
    test = (old) => old % divisible === 0 ? ifTrue : ifFalse;
  }
  if(linea === ''){
    let monito = new mono(number,startingItems,operation,test,divi)
    monos.push(monito);
  }
  counter++;
});



let cycles = 10000; //Change to 20 for the first part, Change to 10000 to second part
let cantidadDeMonos = monos.length;
for(let i= 0; i < cantidadDeMonos; i++){
  modulo *= monos[i].testingNumber;
}
for(let i = 0; i < cycles; i++){
  for(let j= 0; j < cantidadDeMonos; j++){
    monos[j].changeWorryLevel('2'); //Change to 1 for the first part, Change to 2 to second part
    monos[j].testing();
    monos[j].throwItems();
  }
}
let inspectedItems = [];
for(let j= 0; j < cantidadDeMonos; j++){
  inspectedItems.push(monos[j].inspectedItems);
}


let max1 = Math.max(...inspectedItems)
console.log(max1);
let index = inspectedItems.indexOf(max1);
inspectedItems.splice(index,1);
let max2 = Math.max(...inspectedItems)
console.log(max2);
console.log(max1 * max2);