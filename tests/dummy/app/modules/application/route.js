import Route from 'ember-route';
import inject from 'ember-service/inject';
import get from 'ember-metal/get';

export default Route.extend({
  loadingService: inject('loading'),

  activate() {
    // pretend to has already have a locale value
    document.documentElement.setAttribute('lang', 'en-us');
  },

  actions: {
    loading(transition) {
      const loadingService = get(this, 'loadingService');
      loadingService.show();
      transition.finally(() => loadingService.hide());
    }
  }
});
