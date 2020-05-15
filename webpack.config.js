const path = require('path');

module.exports = {
  entry: './index.js', //<- Mi archivo inicial
  output: {
    path: path.resolve(__dirname), //<- No permite hacer rutas mas programaticas
    filename: 'bundle.js' // <- Mi archivo final
  }
}