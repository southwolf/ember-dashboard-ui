import Component from 'ember-component';
import layout from './template';
import styles from '../styles';
import computed, { equal } from 'ember-computed';
import get from 'ember-metal/get';
import { isNone } from 'ember-utils';
import { htmlSafe } from 'ember-string';

export default Component.extend({
  layout, styles,
  tagName: 'nav',
  attributeBindings: ['style'],
  classNames: ['nav'],
  classNameBindings: ['isPrimary:primary', 'isSecondary:secondary'],

  style: computed('color', function() {
    const color = get(this, 'color');
    if (isNone(color)) return null;
    return htmlSafe(`background-color: ${color};`);
  }),

  isPrimary: equal('level', 'primary'),
  isSecondary: equal('level', 'secondary')
}).reopenClass({ positionalParams: ['level'] });
