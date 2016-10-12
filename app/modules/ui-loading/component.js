import Component from '../../components/loading-slider';
import inject from 'ember-service/inject';
import { scheduleOnce } from 'ember-runloop';

export default Component.extend({
  loadingSlider: inject('ui-loading'),

  classNames: ['ui-loading'],

  didInsertElement() {
    this._super(...arguments);
    scheduleOnce('afterRender', this.element.classList, 'remove', 'loading-slider');
  }
});
