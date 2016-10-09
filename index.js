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
          'ui-white': '#fff',
          'ui-purple': '#5940aa',
          'ui-blue': '#1894f2',
          'ui-green': '#2ecc71',
          'ui-tomato': '#e74c3c',
          'ui-golden': '#f1c40f',
          'ui-light': 'color(#bdc3c7 a(24%))',
          'ui-fade-silver': 'color(#bdc3c7 a(48%))',
          'ui-silver': '#bdc3c7',
          'ui-gray': '#919ba2',
          'ui-slate': '#4e5b68',
          'ui-dark-slate': '#34495e'
        },
        'ui-radius': {
          'radius-s': '2px',
          'radius-m': '3px',
          'radius-l': '4px'
        },
        'ui-margin': {
          'margin-xs': '6px',
          'margin-s': '8px',
          'margin-m': '12px',
          'margin-l': '24px',
          'margin-xl': '48px'
        },
        'ui-zindex': {
          'ui-notify': 50,
          'ui-dialog': 40,
          'ui-curtain': 30,
          'ui-dropdown': 20,
          'ui-menu': 10
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
