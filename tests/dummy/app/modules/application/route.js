import Route from 'ember-route';
import set, { setProperties } from 'ember-metal/set';

export default Route.extend({
  activate() {
    // pretend to has already have a locale value
    document.documentElement.setAttribute('lang', 'en-us');
  },

  setupController(controller) {
    setProperties(controller, {
      showLogo: true,
      hasNavigation: true,
      defaultMenu: true,
      secondaryNav: false
    });

    set(controller, 'menu', [
      { name: 'index', route: 'index' },
      { name: 'FOO', route: 'foo' },
      { name: 'BAZ', route: 'baz' }
    ]);

    this._super(...arguments);
  }
});
