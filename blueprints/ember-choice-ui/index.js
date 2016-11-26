const RSVP = require('rsvp');

module.exports = {
  name: 'ember-choice-ui',
  description: 'install all dependencies',

  normalizeEntityName() {},

  afterInstall() {
    return RSVP.allSettled([
      this.addPackagesToProject([
        { name: 'postcss-import' },
        { name: 'postcss-extend' },
        { name: 'postcss-cssnext' },
        { name: 'postcss-fallback' },
        { name: 'rucksack-css' },
        { name: 'postcss-browser-reporter' }
      ]),
      this.addAddonsToProject({
        packages: [
          { name: 'ember-css-modules', target: '^0.6.0' },
          { name: 'ember-cli-node-assets', target: '^0.1.0' }
        ],
        blueprintOptions: { saveDev: true }
      })
    ]);
  }
};
