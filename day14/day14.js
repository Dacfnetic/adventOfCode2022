const fs = require('fs');

const data = fs.readFileSync('./day14/14-14.txt', 'utf-8');



const MoverArena = (pared) => {
    const origen = [500,0];
    let total = 0;

    while(Arena(origen, pared) === true){
        total++;
    };

    return total;
}

const Arena = (origen, pared) => {

    let coordenadas = origen.slice();
    if(pared[coordenadas[0]][coordenadas[1]] != "."){
        return false;
    }

    for(let i=coordenadas[1]; i<pared[0].length-1; i++){
        if(pared[coordenadas[0]][coordenadas[1]+1] == "."){
            coordenadas[1] += 1;
        }
        else if(pared[coordenadas[0]-1][coordenadas[1]+1] == "."){
            coordenadas[0] -= 1;
            coordenadas[1] += 1;
        }
        else if(pared[coordenadas[0]+1][coordenadas[1]+1] == "."){
            coordenadas[0] += 1;
            coordenadas[1] += 1;
        }else{
            pared[coordenadas[0]][coordenadas[1]] = "o";
            return true;
        }
    }
    return false;
}

const Ejecutar = (existeObstaculo = false) => {

    let limites = {
        minX:500,
        maxX:0,
        minY:500,
        maxY:0,
    };
    let flecha = data.split(/\r?\n/);

    for(let i=0; i<flecha.length; i++){
        let coordArr = flecha[i].split(" -> ");
        for(let j=0; j<coordArr.length; j++){
            let coords = coordArr[j].split(",");
            let coordX = Number(coords[0]);
            let coordY = Number(coords[1]);
            if(coordX > limites.maxX){
                limites.maxX = coordX;
            }
            if(coordX < limites.minX){
                limites.minX = coordX;
            }
            if(coordY > limites.maxY){
                limites.maxY = coordY;
            }
            if(coordY < limites.minY){
                limites.minY = coordY;
            }
        }
    }

    let wallMap = new Array(limites.maxX * 2).fill().map(() => new Array(limites.maxY+5).fill("."));

    for(let i=0; i<flecha.length; i++){
        let coordArr = flecha[i].split(" -> ");
        for(let j=1; j<coordArr.length; j++){
            let fromCoords = coordArr[j-1].split(",");
            let toCoords = coordArr[j].split(",");
            let fromX = Number(fromCoords[0]);
            let fromY = Number(fromCoords[1]);
            let toX = Number(toCoords[0]);
            let toY = Number(toCoords[1]);
            if(fromX === toX){
                if(fromY < toY){
                    for(let k=fromY; k<=toY; k++){
                        wallMap[fromX][k] = '#';
                    }
                }else{
                    for(let k=fromY; k>=toY; k--){
                        wallMap[fromX][k] = '#';
                    }
                }
            }
            else if(fromY === toY){
                if(fromX < toX){
                    for(let k=fromX; k<=toX; k++){
                        wallMap[k][fromY] = '#';
                    }
                }else{
                    for(let k=fromX; k>=toX; k--){
                        wallMap[k][fromY] = '#';
                    }
                }
            }
            
        }
    }

    if(existeObstaculo){
        for(let i=0; i<wallMap.length; i++){
            wallMap[i][limites.maxY+2] = '#';
        }
    }

    return wallMap;
}

let wallMap = Ejecutar();
console.log(MoverArena(wallMap));
wallMap = Ejecutar(true);
console.log(MoverArena(wallMap));

