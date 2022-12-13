const fs = require('fs');
const lineas = fs.readFileSync("./day12/12-12.txt", "utf-8").replace(/\r/g, "").trim().split("\n")
const obtenerGrilla = () => {
  const grilla = {
    inicio: {},
    meta: {},
    mapa: [],
  }
  grilla.mapa = lineas.map((linea, y) =>
    [...linea].map((valor, x) => {
      if (valor === "S") {
        grilla.inicio = {
          y,
          x,
        }
        return 0
      }
      if (valor === "E") {
        grilla.meta = { y, x }
        return 25
      }
      return valor.charCodeAt(0) - "a".charCodeAt(0)
    })
  )

  return grilla
}
const ubicacionAEntero = (x, y) => {
  return y * 1e3 + x
}

const enteroAUbicacion = (int) => {
  return {
    y: Math.floor(int / 1e3),
    x: int % 1e3,
  }
}

const obtenerAdyacentes = (x, y, map) => {
  const res = []
  if (y + 1 < map.length && map[y + 1][x] <= map[y][x] + 1) {
    res.push(ubicacionAEntero(x, y + 1))
  }
  if (y - 1 >= 0 && map[y - 1][x] <= map[y][x] + 1) {
    res.push(ubicacionAEntero(x, y - 1))
  }
  if (x + 1 < map[y].length && map[y][x + 1] <= map[y][x] + 1) {
    res.push(ubicacionAEntero(x + 1, y))
  }
  if (x - 1 >= 0 && map[y][x - 1] <= map[y][x] + 1) {
    res.push(ubicacionAEntero(x - 1, y))
  }
  return res
}
const Dijkstra = (map, start, end) => {
  const dist = {}
  const prev = {}
  let queue = []
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const id = ubicacionAEntero(x, y)
      dist[id] = Infinity
      queue.push(id)
    }
  }
  dist[ubicacionAEntero(start.x, start.y)] = 0

  while (queue.length) {
    let u = null
    for (const current of queue) {
      if (u === null || dist[current] < dist[u]) {
        u = current
      }
    }
    if (u === ubicacionAEntero(end.x, end.y)) {
      break
    }
    queue = queue.filter((x) => x !== u)

    const point = enteroAUbicacion(u)
    const neighbors = obtenerAdyacentes(point.x, point.y, map)
    for (const v of neighbors) {
      if (queue.includes(v)) {
        const alt = dist[u] + 1
        if (alt < dist[v]) {
          dist[v] = alt
          prev[v] = u
        }
      }
    }
  }
  return {
    dist,
    prev,
  }
}

const parte1 = () => {
  const input = obtenerGrilla()
  const data = Dijkstra(input.mapa, input.inicio, input.meta)
  const distance = data.dist[ubicacionAEntero(input.meta.x, input.meta.y)]
  console.log(distance)
}

const obtenerAdyacentesParte2 = (x, y, map) => {
  const res = []
  if (y + 1 < map.length && map[y + 1][x] >= map[y][x] - 1) {
    res.push(ubicacionAEntero(x, y + 1))
  }
  if (y - 1 >= 0 && map[y - 1][x] >= map[y][x] - 1) {
    res.push(ubicacionAEntero(x, y - 1))
  }
  if (x + 1 < map[y].length && map[y][x + 1] >= map[y][x] - 1) {
    res.push(ubicacionAEntero(x + 1, y))
  }
  if (x - 1 >= 0 && map[y][x - 1] >= map[y][x] - 1) {
    res.push(ubicacionAEntero(x - 1, y))
  }
  return res
}

const Dijkstra2 = (map, start, end) => {
  const dist = {}
  const prev = {}
  let queue = []
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const id = ubicacionAEntero(x, y)
      dist[id] = Infinity
      queue.push(id)
    }
  }
  dist[ubicacionAEntero(start.x, start.y)] = 0

  while (queue.length) {
    let u = null
    for (const current of queue) {
      if (u === null || dist[current] < dist[u]) {
        u = current
      }
    }

    const point = enteroAUbicacion(u)
    if (map[point.y][point.x] === 0) {
      return dist[u]
    }

    queue = queue.filter((x) => x !== u)

    const neighbors = obtenerAdyacentesParte2(point.x, point.y, map)
    for (const v of neighbors) {
      if (queue.includes(v)) {
        const alt = dist[u] + 1
        if (alt < dist[v]) {
          dist[v] = alt
          prev[v] = u
        }
      }
    }
  }
}

const parte2 = () => {
  const input = obtenerGrilla()
  const distance = Dijkstra2(input.mapa, input.meta)
  console.log(distance)
}
parte1()

parte2()