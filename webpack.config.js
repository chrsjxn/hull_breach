var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        query: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      }
    ]
  }
}
