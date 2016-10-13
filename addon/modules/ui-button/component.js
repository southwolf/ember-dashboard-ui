import Ember from 'ember';
import {htmlSafe} from 'ember-string';
import computed from 'ember-computed';
import {isNone} from 'ember-utils';

const {Component, K} = Ember;

export default Component.extend({
  tagName: 'button',

  attributeBindings: ['type', 'disabled'],
  type: 'button',
  disabled: false,

  classNames: ['button'],
  classNameBindings: ['color', 'size'],
  color: null,
  size: null,

  icon: null,
  iconMarkups: computed('icon', function() {
    const icon = this.get('icon');
    return isNone(icon) ? null : htmlSafe(`<i class="${icon}"></i>`);
  }),

  onClick: K,
  click() { this.onClick(...arguments) }
}).reopenClass({positionalParams: ['text']});
