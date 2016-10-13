const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const ChoiceUI = require('./index.js').options;
const options = {
  cssModules: ChoiceUI.cssModules,
  nodeAssets: Object.assign({}, ChoiceUI, {
    ['clipboard']: {
      import: ['dist/clipboard.js']
    }
  })
};

module.exports = function(defaults) {
  const app = new EmberAddon(defaults, options);
  app.import('vendor/shims/clipboard.js');
  return app.toTree();
};
