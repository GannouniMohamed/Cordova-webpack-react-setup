const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: './js/bundle.js'
  },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Oyez t work shop',
      filename: 'index.html',
      template: 'template.html'
    })
  ], 
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true
  }
};