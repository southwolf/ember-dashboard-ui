import Route from 'ember-route';
import { setProperties } from 'ember-metal/set';

export default Route.extend({
  setupController() {
    const application = this.controllerFor('application')
    setProperties(application, {
      showLogo: true,
      hasNavigation: true,
      defaultMenu: true,
      secondaryNav: false
    })

    this._super(...arguments);
  }
})
