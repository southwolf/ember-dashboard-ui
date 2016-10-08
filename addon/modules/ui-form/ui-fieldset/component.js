import Component from 'ember-component';
import layout from './template'
import computed from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import { isPresent } from 'ember-utils';

export default Component.extend({
  layout,
  classNames: ['content-column'],

  sizeClassName: computed('size', function() {
    return this.getWithDefault('size', '');
  }),

  hasSplit: computed('split', function() {
    return isPresent(get(this, 'split'));
  }),

  splitClassName: computed('split', function() {
    return get(this, 'hasSplit') ? ` ${get(this, 'split')} column-wrapper` : '';
  }),

  modifierClassName: computed('sizeClassName', 'splitClassName', function() {
    return `${get(this, 'sizeClassName') + get(this, 'splitClassName')}`;
  }),

  init() {
    if (get(this, 'inside')) {
      set(this, 'tagName', '');

      const originModifier = get(this, 'modifierClassName');
      set(this, 'modifierClassName', `inner${originModifier}`);
    }

    this._super(...arguments);
  }
});
