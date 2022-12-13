const fs = require('fs');
const input = fs.readFileSync('./day13/13-13.txt','utf-8').replace(/\r/g, "").trim();
const datos = input.split('\n\n');
const paresDeDatos = datos.map((pairPacket) => pairPacket.split('\n').map(JSON.parse));
const comparar = (left, right) => {
    if (typeof left === 'number' && typeof right === 'number'){
      return left - right;
    } 
    if (typeof left === 'number') {
        left = [left];
    } else if (typeof right === 'number') {
        right = [right];
    }
    for (let i = 0; i < left.length; i++) {
        if (right[i] === undefined) {
            return 1;
        }
        const c = comparar(left[i], right[i]);
        if (c !== 0) {
            return c;
        }
    }
    return left.length === right.length ? 0 : -1;
}
function parte1() {
    const ordenados = paresDeDatos.map(([a, b], i) => {
        return +(comparar(a, b) <= 0) * (i + 1);
    });
    console.log(ordenados.reduce((acc, currVal) => acc + currVal));
}
function parte2() {
    const dividerPackets = [[[2]], [[6]]];
    const packets = paresDeDatos
        .flat()
        .concat(dividerPackets)
        .sort(comparar);
    const res = dividerPackets.map((d) => packets.indexOf(d) + 1).reduce((acc, n) => acc * n)
    console.log(res);
}
parte1();
parte2();