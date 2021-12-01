// const grid = [3][3];

class Grid {
  constructor(fila, columna) {
    this.resize(fila, columna);
  }

  resize(fila, columna) {
    this.tabla = Array(fila).fill(Array(columna));
  }

  toString() {
    return "[" + this.tabla.length + "," + this.tabla[0].length + "]";
  }
}

class Rob {
  positionX = 0;
  positionY = 0;
}

module.exports = {
  Grid,
  Rob,
};
