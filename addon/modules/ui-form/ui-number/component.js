import Component from 'ember-component';
import UIFormWrapperMixin from '../../../mixins/ui-form-wrapper';
import layout from './template';
import styles from '../styles';
import computed, { reads } from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend(UIFormWrapperMixin, {
  layout, styles,
  classNameBindings: ['disabled'],

  hasDisabled: reads('disabled'),

  // check if value is valid against max
  isValidToMax: computed('max', 'value', function() {
    return get(this, 'value') < get(this, 'max');
  }),

  // check if value is valid against min
  isValidToMin: computed('min', 'value', function() {
    return get(this, 'value') > get(this, 'min');
  }),

  // check if need normalize to align with step
  normalized: computed('value', 'step', function() {
    return get(this, 'value') % get(this, 'step') === 0;
  }),

  actions: {
    increase() {
      if (get(this, 'hasDisabled')) return;

      if (get(this, 'isValidToMax')) {
        const step = get(this, 'step');
        const value = get(this, 'value');

        if (get(this, 'normalized')) {
          set(this, 'value', value + step);
        } else {
          set(this, 'value', value + (step - value % step));
        }
      }
    },

    decrease() {
      if (get(this, 'hasDisabled')) return;

      if (get(this, 'isValidToMin')) {
        const step = get(this, 'step');
        const value = get(this, 'value');

        if (get(this, 'normalized')) {
          set(this, 'value', value - step);
        } else {
          set(this, 'value', value - value % step);
        }
      }
    }
  }
});
