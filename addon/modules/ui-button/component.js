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
  classNameBindings: ['color', 'size', 'iconsize'],
  attributeBindings: ['type', 'disabled'],

  color: null,
  size: null,
  iconsize: 16,
  type: 'button',
  disabled: false,

  click() {
    tryInvoke(this, 'onClick', arguments);
  }
}).reopenClass({positionalParams: ['text']});
