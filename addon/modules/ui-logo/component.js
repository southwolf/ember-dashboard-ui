import Ember from 'ember';
import layout from './template';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import computed from 'ember-computed';
import { isNone } from 'ember-utils';
import { htmlSafe } from 'ember-string';

export default Ember.LinkComponent.extend({
  layout,

  linkLabel: computed('linkTitle', function() {
    return isNone(get(this, 'linkTitle'))
      ? null : htmlSafe(`<span>${get(this, 'linkTitle')}`)
  }).readOnly(),

  willRender() {
    let params = get(this, 'params');
    if (params.length === 1) set(this, 'params', ['', ...params])
    this._super(...arguments);
  }
});
