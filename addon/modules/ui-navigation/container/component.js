import Component from 'ember-component';
import layout from './template';
import styles from '../styles';
import { equal } from 'ember-computed';

export default Component.extend({
  layout, styles,
  tagName: 'nav',
  attributeBindings: ['style'],

  isPrimary: equal('level', 'primary'),
  isSecondary: equal('level', 'secondary')
}).reopenClass({ positionalParams: ['level'] });
