import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { htmlSafe } from 'ember-string';
import { tryInvoke } from 'ember-utils';

export default Component.extend({
  layout, styles,
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
    const icon = get(this, 'icon');
    return icon ? htmlSafe(`<i class="${icon}"></i>`) : null;
  }),

  click() {
    tryInvoke(this, 'onClick', arguments);
  }
}).reopenClass({positionalParams: ['text']});
