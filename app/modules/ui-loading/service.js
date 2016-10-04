import Service from '../../services/loading-slider';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Service.extend({
  start(duration = 1000) {
    set(this, '_timer', window.setInterval(this.startLoading.bind(this), duration));
  },

  stop(timer) {
    window.clearInterval(get(this, '_timer'));
  }
});
