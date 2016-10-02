var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var ChoiceUI = require('./index.js');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    cssModules: ChoiceUI.options.cssModules,
    nodeAssets: ChoiceUI.options.nodeAssets
  });

  return app.toTree();
};
