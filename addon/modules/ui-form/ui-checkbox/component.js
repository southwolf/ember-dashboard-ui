import Component from 'ember-component';
import layout from './template';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { isPresent } from 'ember-utils';
import { htmlSafe } from 'ember-string';

export default Component.extend({
  layout,

  checkedClass: computed('checked', function() {
    return get(this, 'checked') ? 'checked' : 'unchecked';
  }),

  errorContent: computed('subject.error', 'error', function() {
    const error = get(this, 'subject.error') || get(this, 'error');
    if (isPresent(error)) {
      return htmlSafe(`<div class="field-error">${error}</div>`);
    } else return '';
  }),

  didInsertElement() {
    const input = this.element.querySelector('input');
    const label = this.element.querySelector('label');
    label.setAttribute('for', input.id);
    this.element.parentNode.classList.add('ui-checkbox');
  }
});
