var nsp = require('nsp');

function NSPPlugin(options) {
  if (!options || (!options.package && !options.shrinkwrap)) {
    throw new Error("must provide package or shrinkwrap path")
  }
  this.options = options;
}

NSPPlugin.prototype.apply = function (compiler) {

  nsp.check(this.options, function () {
    console.log(arguments);
  })

  compiler.plugin("compilation", function(compilation) {
    console.log(compilation);
  });

  compiler.plugin('done', function (stats) {
    console.log('done');
  })
}


module.exports = NSPPlugin;