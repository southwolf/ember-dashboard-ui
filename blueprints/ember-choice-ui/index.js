var RSVP = require('rsvp');

module.exports = {
  name: 'ember-choice-ui',
  description: 'install all dependencies',

  normalizeEntityName() {},

  afterInstall() {
    return RSVP.allSettled([
      // Build same style system for consuming applications
      this.addAddonToProject({ name: 'ember-css-modules' }),
      this.addPackagesToProject([
        {name: 'postcss-import'},
        {name: 'postcss-extend'},
        {name: 'postcss-cssnext'},
        {name: 'postcss-fallback'},
        {name: 'rucksack-css'},
        {name: 'postcss-browser-reporter'}
      ])
    ]);
  }
};
