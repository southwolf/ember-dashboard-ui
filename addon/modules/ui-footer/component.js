import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import computed, { equal } from 'ember-computed';
import get from 'ember-metal/get';


export default Component.extend({
  layout, styles,
  tagName: 'footer',
  classNames: ['ui-footer'],

  normalClassName: computed('normal', function() {
    const normal = get(this, 'normal');
    return normal ? ' normal' : '';
  }),
});
