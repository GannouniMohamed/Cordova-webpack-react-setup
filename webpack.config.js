const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
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
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
    module: {
    rules: [
      {
        test: /\.(js|jsx|json)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.json?$/,
        loader: "json-loader"
      },
      {
        test: /\.xml?$/,
        loader: 'xml-loader'
      },
      {
        test: /\.(png|jpg|ttf)?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true
  }
};