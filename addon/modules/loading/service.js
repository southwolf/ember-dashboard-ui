import Service from 'ember-service';
import set from 'ember-metal/set';
import { scheduleOnce, later } from 'ember-runloop';

export default Service.extend({
  loading: false,
  finish: true,

  show() {
    set(this, 'finish', false);
    set(this, 'loading', true);
  },

  hide() {
    set(this, 'finish', true);
    later(this, 'set', 'loading', false, 750);
  }
});
