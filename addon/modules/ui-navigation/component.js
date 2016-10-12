import $ from 'jquery';
import Component from 'ember-component';
import layout from './template';
import styles from './styles';
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

  didInsertElement() {
    this._super(...arguments);

    // TODO: wait for actual responsive breakpoints
    scheduleOnce('render', this, 'autoDetectWrapperHeight');
    const matchTablet = window.matchMedia('(max-width: 767px)');
    const matchMobile = window.matchMedia('(max-width: 479px)');
    matchTablet.addListener(bind(this, this.autoDetectWrapperHeight));
    matchMobile.addListener(bind(this, this.autoDetectWrapperHeight));

    if ($window.scrollTop() >= scrollOffset) {
      scheduleOnce('afterRender', this.element.classList, 'add', 'sticky');
    }

    this.timer = null;
    this.boundAutoHideNavigation = bind(this, this.autoHideNavigation);
    $window.on('scroll', this.boundAutoHideNavigation);
  },

  autoDetectWrapperHeight(/*mediaQueriesList*/) {
    const height = window.getComputedStyle(this.element.children[0]).height
    this.element.style.height = height;
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
