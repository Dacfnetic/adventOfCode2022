const fs = require('fs');
const cadena = '604326307556552675658862139498712279284288674843723595288759969437368271924672604405211233552236632';
console.log(cadena.length);
const datos = fs.readFileSync("./day8/08-08.txt", "utf-8").split("\r\n")
let invisibles = 0;
let visibles = 0;
let arbolitos = [];
let dimensionX = 0;
let dimensionY =  0;
const sumarInvisibles = (arrayDeArboles) => {
  arrayDeArboles.forEach((arbol) => (arbol.invisibleX && arbol.invisibleY) ? invisibles++ : visibles++);
}


const recorrerArboles = (arboles) => {
  
  arboles.forEach((arbolA) => {
    
    let mayoresArriba = 0;
    let mayoresAbajo = 0;
    let mayoresDerecha = 0;
    let mayoresIzquierda = 0;
    let arbolesDerecha = dimensionX - arbolA.posX-1;
    let arbolesIzquierda = arbolA.posX;
    let arbolesArriba = arbolA.posY;
    let arbolesAbajo = dimensionY - arbolA.posY-1;
    arboles.forEach((arbolB) => {
      if(arbolB.altura >= arbolA.altura){
        if(arbolB.posY == arbolA.posY){
          if(arbolB.posX > arbolA.posX){
            mayoresDerecha++;
            if(arbolesDerecha > arbolB.posX - arbolA.posX || arbolesDerecha == 0){
              arbolesDerecha = arbolB.posX - arbolA.posX;
            }
          }
          if(arbolB.posX < arbolA.posX){
            mayoresIzquierda++;
            if(arbolesIzquierda > arbolA.posX - arbolB.posX || arbolesIzquierda == 0){
              arbolesIzquierda = arbolA.posX - arbolB.posX;
            }
          }
        }
        if(arbolB.posX == arbolA.posX){
          if(arbolB.posY > arbolA.posY){
            mayoresArriba++;
            if(arbolesAbajo > arbolB.posY - arbolA.posY || arbolesAbajo == 0){
              arbolesAbajo = arbolB.posY - arbolA.posY;
            }
          }
          if(arbolB.posY < arbolA.posY){
            mayoresAbajo++;
            if(arbolesArriba > arbolA.posY - arbolB.posY || arbolesArriba == 0){
              arbolesArriba = arbolA.posY - arbolB.posY;
            }
          }
        } 
      }
    });
    (mayoresDerecha > 0 && mayoresIzquierda > 0) ? arbolA.invisibleX = true : arbolA.invisibleX = false;
    (mayoresArriba > 0 && mayoresAbajo > 0) ? arbolA.invisibleY = true : arbolA.invisibleY = false;
    arbolA.scenic = arbolesAbajo * arbolesArriba * arbolesDerecha * arbolesIzquierda;
  });
}





const crearArrayDeArboles = (data) => {
  let indiceY = 0;
  data.forEach(linea => {
    let indiceX = 0;
    const array = linea.split('');

    array.forEach(arbol => {
      let arbolito = {
        altura: arbol,
        scenic: 0,
        posX: indiceX,
        posY: indiceY,
        invisibleX: false,
        invisibleY: false
      }
      arbolitos.push(arbolito);
      indiceX++;
    });
    indiceY++;
    dimensionX = indiceX;
  });
  
  dimensionY = indiceY;
}
debugger;
const buscarMaximoScenic = (arboletos) => {
  let max = 0;
  let posiX = 0;
  let posiY = 0;
  arboletos.forEach(arbol => {
    if (arbol.scenic > max){
      max = arbol.scenic;
      posiX = arbol.posX;
      posiY = arbol.posY;
    }
  });
debugger;
  console.log(max, posiX,posiY);
}

crearArrayDeArboles(datos);
recorrerArboles(arbolitos);
sumarInvisibles(arbolitos);
buscarMaximoScenic(arbolitos);
//console.log(visibles);
//console.log(invisibles);