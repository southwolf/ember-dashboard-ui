import Component from 'ember-component';
import layout from './template';
import styles from '../../styles';
import { equal } from 'ember-computed';

export default Component.extend({
  layout, styles,
  tagName: 'ul',
  localClassNames: ['menu'],
  localClassNameBindings: ['pullRight:r'],

  activeClass: 'current',
  pullRight: equal('position', 'r')
}).reopenClass({ positionalParams: ['items'] });
