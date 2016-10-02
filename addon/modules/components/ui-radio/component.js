import Component from 'ember-component';
import layout from './template';
import styles from '../../../_styles/form';
import computed from 'ember-computed';
import get from 'ember-metal/get';

export default Component.extend({
  layout, styles,
  localClassNames: ['field', 'ui-radio'],
  localClassNameBindings: ['checked'],

  checked: computed('groupValue', 'value', function() {
    return get(this, 'groupValue') === get(this, 'value');
  }).readOnly(),
});
