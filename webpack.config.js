let path = require('path')
let webpack = require('webpack')

 module.exports = {
     mode: 'development',
     entry: './main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 use: 'babel-loader',
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 }
