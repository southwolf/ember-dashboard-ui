import Component from 'ember-component';
import layout from './template'
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { isPresent } from 'ember-utils';

export default Component.extend({
  layout,
  classNames: ['content-column'],

  sizeClassName: computed('size', function() {
    const size = get(this, 'size');
    return size ?  ' ' + size : '';
  }),

  splitClassName: computed('split', function() {
    const split = get(this, 'split');
    return split ?  ' ' + split : '';
  }),

  hasSplit: computed('split', function() {
    return isPresent(get(this, 'split'));
  }),

  wrapperClassNames: computed('sizeClassName', 'splitClassName', function() {
    return `column-wrapper${get(this, 'sizeClassName') + get(this, 'splitClassName')}`;
  })
});
