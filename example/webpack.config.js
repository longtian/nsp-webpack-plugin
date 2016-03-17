var path = require('path');
var NSPPlugin = require('../');
module.exports = {
  entry: path.join(__dirname, 'app', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js"
  },
  plugins: [
    new NSPPlugin({
      package: path.join(__dirname, 'package.json')
    })
  ]
}