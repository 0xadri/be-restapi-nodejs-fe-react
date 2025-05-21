const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'dev',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'final.js',
  },
  target: 'node',
  plugins: [
    new Dotenv({
      path: './.env',          // default
      safe: false,             // true = use .env.example to validate
      systemvars: false,       // true = also load system environment variables
      allowEmptyValues: false  // true = allow empty env vars
    })
  ],
};