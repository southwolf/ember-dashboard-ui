import Route from 'ember-route';
import { setProperties } from 'ember-metal/set';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);

    setProperties(controller, {
      noSticky: true,
      menuOne: [
        { name: '首页', route: 'index' },
        { name: '导航', route: 'page' },
        { name: '拖拽', route: 'drag-and-drop' },
        { name: '表单', route: 'form' },
        { name: '通知', route: 'notification' },
      ],
      toggleSticky() {
        this.toggleProperty('noSticky');
      }
    })
  }
});
