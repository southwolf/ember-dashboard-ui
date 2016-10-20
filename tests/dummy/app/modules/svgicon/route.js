import Route from 'ember-route';

export default Route.extend({
  model() {
    return {
      svg: [
        {icon: 'brush'},
      ]
    };
  }
});
