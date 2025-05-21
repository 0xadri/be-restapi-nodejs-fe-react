const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'prod',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'final.js',
  },
  target: 'node',
};