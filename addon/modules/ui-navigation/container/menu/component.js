import Component from 'ember-component';
import layout from './template';
import styles from '../../styles';
import { equal } from 'ember-computed';

export default Component.extend({
  layout, styles,
  tagName: 'ul',
  classNames: ['menu'],
  classNameBindings: ['isPrimary:primary', 'isSecondary:secondary'],

  activeClass: 'current',
  isPrimary: equal('position', 'l'),
  isSecondary: equal('position', 'r')
}).reopenClass({ positionalParams: ['items'] });
