import Route from 'ember-route';

export default Route.extend({
  activate() {
    // pretend to has already have a locale value
    document.documentElement.setAttribute('lang', 'en-us');
  }
});
