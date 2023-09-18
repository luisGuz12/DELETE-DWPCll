// Importar el modulo Path
const path = require('path');

// Exportamos un Configuration Options Object
module.exports = {
  // 0. Estableciendo el modo produccion
  mode: 'production',
  // 1. Estableciendo el archivo indexador
  // del front-end
  entry: "./client/index.js"
  // 2. Estableciendo el archivo de salida
