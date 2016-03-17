# nsp-webpack-plugin
[![](https://img.shields.io/npm/v/nsp-webpack-plugin.svg)](https://www.npmjs.com/package/nsp-webpack-plugin)

Webpack plugin for NSP

## Usage

```sh
npm install nsp-webpack-plugin -D
```

```js
var NSPPlugin = require('nsp-webpack-plugin');
module.exports = {
	plugins: [
		new NSPPlugin()
	]
}
```