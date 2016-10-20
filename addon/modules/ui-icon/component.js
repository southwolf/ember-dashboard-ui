import Component from 'ember-component';
import layout from './template';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { htmlSafe } from 'ember-string';
import { tryInvoke } from 'ember-utils';

export default Component.extend({
  layout,
  tagName: '',
  size: 16,

  icon: null,
  xlink: computed('icon', function() {
    const icon = get(this, 'icon');
    return icon ? htmlSafe(`<use xlink:href="#${icon}"></use>`) : null;
  }),
});
