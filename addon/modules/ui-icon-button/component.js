import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import { tryInvoke } from 'ember-utils';

export default Component.extend({
  layout, styles,
  tagName: 'a',

  classNames: ['icon-button'],
  classNameBindings: ['color'],
  attributeBindings: ['disabled', 'href', 'tips:data-tips'],

  color: null,
  size: "16",
  style: null,
  tips: null,
  href: null,
  disabled: false,

  click() {
    tryInvoke(this, 'onClick', arguments);
  }
});
