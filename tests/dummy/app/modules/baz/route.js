import Route from 'ember-route';
import { setProperties } from 'ember-metal/set';

export default Route.extend({
  renderTemplate() {
    const application = this.controllerFor('application')
    setProperties(application, {
      hasNavigation: false,
    })

    this.render('-navigation/foo-secondary', {
      into: 'application',
      outlet: 'secondary'
    });

    this._super(...arguments);
  }
})
