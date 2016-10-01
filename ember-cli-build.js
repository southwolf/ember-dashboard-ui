var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var options = require('./index.js').options;

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    cssModules: options.cssModules
  });

  return app.toTree();
};
