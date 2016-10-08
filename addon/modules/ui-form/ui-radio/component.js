import Component from 'ember-component';
import layout from './template';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { isPresent } from 'ember-utils';
import { htmlSafe } from 'ember-string';

export default Component.extend({
  layout,
  classNames: ['ui-radio'],

  checked: computed('currentValue', function() {
    return get(this, 'value') == get(this, 'currentValue');
  }),

  checkedClass: computed('checked', function() {
    return get(this, 'checked') ? 'checked' : 'unchecked';
  }),

  errorContent: computed('subject.error', function() {
    const error = get(this, 'subject.error');
    if (isPresent(error)) {
      return htmlSafe(`<div class="field-error">${error}</div>`)
    }
  }),

  didInsertElement() {
    const input = this.element.querySelector('input');
    const label = this.element.querySelector('label');
    label.setAttribute('for', input.id);
    this.element.parentElement.classList.add('has-label');
  }
});
