import $ from 'jquery';
import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import computed from 'ember-computed';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';

let scrolling = false,
    scrollDelta = 6,
    scrollOffset = 120,
    prevTop = 0,
    currTop = 0,
    $window = $(window);

export default Component.extend({
  layout, styles,
  tagName: 'header',
  localClassNames: ['container'],
  localClassNameBindings: ['sticky'],
  attributeBindings: ['style'],

  height: 60,
  style: computed('height', function() {
    return htmlSafe(`height: ${get(this, 'height')}px`);
  }),

  didInsertElement() {
    this.boundAutoHideNavigation = this.autoHideNavigation.bind(this);
    $window.on('scroll', this.boundAutoHideNavigation);
  },

  autoHideNavigation() {
    if (!scrolling) {
      scrolling = true;
      currTop = $window.scrollTop();

      if (currTop - prevTop > scrollDelta && currTop > scrollOffset) {
        this.$().addClass('sticky');
      } else if (prevTop - currTop > scrollDelta) {
        this.$().removeClass('sticky');
      }

      prevTop = currTop;
      scrolling = false;
    }
  },

  willDestroy() {
    $window.off('scroll', this.boundAutoHideNavigation);
  }
});
