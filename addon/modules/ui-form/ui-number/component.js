import Component from 'ember-component';
import layout from './template';
import computed, { reads } from 'ember-computed';
import { isPresent } from 'ember-utils';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  layout,
  classNames: ['ui-number'],
  classNameBindings: ['disabled'],

  hasDisabled: reads('disabled'),

  hasLabel: computed('label', function() {
    return isPresent(get(this, 'label'));
  }),

  labelContent: computed('hasLabel', function() {
    const label = get(this, 'label');
    if (get(this, 'hasLabel')) {
      return htmlSafe(`<label>${label}</label>`);
    } else return '';
  }),

  errorContent: computed('subject.error', function() {
    const error = get(this, 'subject.error');
    if (isPresent(error)) {
      return htmlSafe(`<div class="field-error">${error}</div>`)
    }
  }),

  didInsertElement() {
    if (get(this, 'hasLabel')) {
      const input = this.element.querySelector('input');
      const label = this.element.querySelector('label');
      label.setAttribute('for', input.id);
      this.element.parentElement.classList.add('has-label');
    }
  },

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
