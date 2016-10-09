import Component from 'ember-component';
import layout from './template';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { htmlSafe } from 'ember-string';
import { isPresent } from 'ember-utils';

export default Component.extend({
  layout,
  classNames: ['ui-fieldset'],

  sizeClass: computed('size', function() {
    return ` ${this.getWithDefault('size', 'm')}`;
  }),

  directionClass: computed('size', function() {
    return ` ${this.getWithDefault('direction', 'column')}`;
  }),

  helpContent: computed('help', function() {
    const help = get(this, 'help');
    if (isPresent(help)) {
      return htmlSafe(`<div class="field-help">${get(this, 'help')}</div>`);
    } else return '';
  })
});
