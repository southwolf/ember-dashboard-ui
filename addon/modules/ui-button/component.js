import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import { tryInvoke } from 'ember-utils';

export default Component.extend({
  layout, styles,
  tagName: 'button',

  classNames: ['button'],
  classNameBindings: ['color', 'size', 'iconsize'],
  attributeBindings: ['type', 'disabled', 'tips:data-tips'],

  color: null,
  size: null,
  tips: null,
  type: 'button',
  disabled: false,

  click() {
    tryInvoke(this, 'onClick', arguments);
  }
}).reopenClass({positionalParams: ['text']});
