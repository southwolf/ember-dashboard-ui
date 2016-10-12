import $ from 'jquery';
import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { htmlSafe } from 'ember-string';
import { bind, scheduleOnce } from 'ember-runloop';

let scrolling = false,
    scrollDelta = 6,
    scrollOffset = 120,
    prevTop = 0,
    currTop = 0,
    $window = $(window);

export default Component.extend({
  layout, styles,
  tagName: 'header',
  classNames: ['ui-navigation'],
  localClassNames: ['container'],
  attributeBindings: ['style'],

  height: 60,
  style: computed('height', function() {
    return htmlSafe(`height: ${get(this, 'height')}px`);
  }),

  didInsertElement() {
    this._super(...arguments);

    if ($window.scrollTop() >= scrollOffset) {
      scheduleOnce('afterRender', this.element.classList, 'add', 'sticky');
    }

    this.timer = null;
    this.boundAutoHideNavigation = bind(this, this.autoHideNavigation);
    $window.on('scroll', this.boundAutoHideNavigation);
  },

  autoHideNavigation() {
    if (!scrolling) {
      scrolling = true;
      currTop = $window.scrollTop();

      if (currTop - prevTop > scrollDelta && currTop > scrollOffset) {
        scheduleOnce('afterRender', this.element.classList, 'add', 'sticky');
      } else if (prevTop - currTop > scrollDelta) {
        scheduleOnce('afterRender', this.element.classList, 'remove', 'sticky');
      }

      prevTop = currTop;
      scrolling = false;
    }
  },

  willDestroy() {
    $window.off('scroll', this.boundAutoHideNavigation);
  }
});
