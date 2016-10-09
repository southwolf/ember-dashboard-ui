import Component from 'ember-component';
import layout from './template';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { isPresent } from 'ember-utils';
import { htmlSafe } from 'ember-string';

export default Component.extend({
  layout,

  hasLabel: computed('label', function() {
    return isPresent(get(this, 'label'));
  }),

  labelContent: computed('hasLabel', function() {
    const label = get(this, 'label');
    if (get(this, 'hasLabel')) {
      return htmlSafe(`<label>${label}</label>`);
    } else return '';
  }),

  errorContent: computed('subject.error', 'error', function() {
    const error = get(this, 'subject.error') || get(this, 'error');
    if (isPresent(error)) {
      return htmlSafe(`<div class="field-error">${error}</div>`);
    } else return '';
  }),

  didInsertElement() {
    this.element.parentElement.classList.add('ui-input');

    if (get(this, 'hasLabel')) {
      const input = this.element.querySelector('input');
      const label = this.element.querySelector('label');
      label.setAttribute('for', input.id);
      this.element.parentElement.classList.add('has-label');
    }
  }
});
