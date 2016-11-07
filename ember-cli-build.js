const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const ChoiceUI = require('./index.js').options;
const options = {
  cssModules: ChoiceUI.cssModules,
  nodeAssets: Object.assign({}, ChoiceUI, {
    clipboard: {
      import: ['dist/clipboard.js']
    },
    faker: {
      import: ['build/build/faker.js']
    }
  })
};

module.exports = function(defaults) {
  const app = new EmberAddon(defaults, options);
  app.import('vendor/shims/clipboard.js');
  app.import('vendor/shims/faker.js');
  return app.toTree();
};
