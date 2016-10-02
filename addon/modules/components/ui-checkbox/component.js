import Component from 'ember-component';
import layout from './template';
import styles from '../../../_styles/form';

export default Component.extend({
  layout, styles,
  localClassNames: ['field', 'ui-checkbox'],
  localClassNameBindings: ['checked']
});
