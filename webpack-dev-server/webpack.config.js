const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), //<-- Le indicamos que se guarde en una carpeta Dist
    filename: 'js/[name].js'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          {
            loader:MiniCSSExtractPlugin.loader //<-- devuelve una cadena de texto
          },
          // 'style-loader', //<-- inyecta
          'css-loader' //<-- entiende
        ]
      }
    ]
  },
  plugins:[
    new MiniCSSExtractPlugin(
      {
        filename: 'css/[name].css' //<-- exporta el archivo css
      }
    ),
    new HtmlWebpackPlugin( //<-- inserta los links de CSS y JS en el index.html
      {
        title: 'Plugins'
      }
    ),
  ]
}

