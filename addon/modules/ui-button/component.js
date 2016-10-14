import Component from 'ember-component';
import { htmlSafe } from 'ember-string';
import computed from 'ember-computed';
import { isNone, tryInvoke } from 'ember-utils';

export default Component.extend({
  tagName: 'button',
  classNames: ['button'],
  classNameBindings: ['color', 'size'],
  attributeBindings: ['type', 'disabled'],

  color: null,
  size: null,
  type: 'button',
  disabled: false,

  icon: null,
  iconMarkups: computed('icon', function() {
    const icon = this.get('icon');
    return isNone(icon) ? null : htmlSafe(`<i class="${icon}"></i>`);
  }),

  click() {
    tryInvoke(this, 'onClick', arguments);
  }
}).reopenClass({positionalParams: ['text']});
