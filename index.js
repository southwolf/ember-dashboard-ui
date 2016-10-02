'use strict';

module.exports = {
  name: 'ember-choice-ui',

  options: {
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-extend'),
        require('postcss-fallback'),
        require('rucksack-css')({ alias: false, hexRGBA: false, fallbacks: true }),
        require('postcss-cssnext'),
        require('postcss-browser-reporter')
      ],
      virtualModules: {
        'ui-colors': {
          'ui-blue': '#1894f2',
          'ui-gray': '#919ba2',
          'ui-green': '#2ecc71',
          'ui-slate': '#4e5b68',
          'ui-golden': '#f1c40f',
          'ui-purple': '#5940aa',
          'ui-silver': '#bdc3c7',
          'ui-tomato': '#e74c3c'
        }
      }
    },
    nodeAssets: {
      ['normalize.css']: {
        import: {
          include: [{ path: 'normalize.css', prepend: true }]
        }
      }
    }
  },

  isDevelopingAddon() {
    return 'development' === process.env.EMBER_ENV;
  }
};
