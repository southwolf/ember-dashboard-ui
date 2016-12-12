import Route from 'ember-route';
import { setProperties } from 'ember-metal/set';

export default Route.extend({
  renderTemplate() {
    const application = this.controllerFor('application')
    setProperties(application, {
      showLogo: false,
      hasNavigation: true,
      defaultMenu: false,
      secondaryNav: true
    })

    this.render('-navigation/foo-child-primary', {
      into: 'application',
      outlet: 'primary'
    });

    this.render('-navigation/foo-child-secondary', {
      into: 'application',
      outlet: 'secondary'
    });

    this._super(...arguments);
  }
})
