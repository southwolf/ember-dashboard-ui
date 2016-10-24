import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { htmlSafe } from 'ember-string';
import { tryInvoke } from 'ember-utils';

export default Component.extend({
  classNameBindings: ['tips'],

  layout, styles,
  tagName: '',
  size: 16,
  tips: null,

  icon: null,
  xlink: computed('icon', function() {
    const icon = get(this, 'icon');
    return icon ? htmlSafe(`<use xlink:href="#${icon}"></use>`) : null;
  }),
});
