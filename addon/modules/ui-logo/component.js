import Ember from 'ember';
import layout from './template';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Ember.LinkComponent.extend({
  layout,

  willRender() {
    let params = get(this, 'params');
    if (params.length === 1) set(this, 'params', ['', ...params])
    this._super(...arguments);
  }
});
