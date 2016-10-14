import Component from 'ember-component';
import layout from './template';
import styles from './styles';

export default Component.extend({
  layout, styles,
  tagName: 'footer',
  classNames: ['ui-footer']
});
