import Service from '../../services/loading-slider';
import { A } from 'ember-array/utils';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Service.extend({
  timers: A(),

  start(duration = 1000) {
    this.startLoading();
    const timer = window.setInterval(this.startLoading.bind(this), duration);
    return get(this, 'timers').pushObject(timer);
  },

  stop(timer) {
    const timers = get(this, 'timers');
    if (timers.length) {
      window.clearInterval(get(this, 'timers').shiftObject());
    }
  }
});
