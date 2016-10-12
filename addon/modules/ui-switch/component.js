import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { isBlank } from 'ember-utils';

export default Component.extend({
  layout, styles,
  tagName: 'a',
  classNames: ['switch-button'],

  switchElement: computed('size', 'toggle', function() {
    const size = isBlank(get(this, 'size')) ? '' : ` ${get(this, 'size')}`;
    const toggle = get(this, 'toggle') ? ' toggle-on' : '';
    return `<div class="switch${size}${toggle}"></div>`;
  }),

  click() {
    this.toggleProperty('toggle');
    this.onToggle && this.onToggle();
  }
}).reopenClass({ positionalParams: ['label', 'size'] });
