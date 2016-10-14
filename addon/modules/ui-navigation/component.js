import $ from 'jquery';
import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import get from 'ember-metal/get';
import { bind, scheduleOnce } from 'ember-runloop';

let scrolling = false,
    scrollDelta = 6,
    scrollOffset = 120,
    prevTop = 0,
    currTop = 0,
    $window = $(window),
    stickyBounded = false,
    matchNormal = window.matchMedia('(max-width: 991px)'),
    matchTablet = window.matchMedia('(max-width: 767px)'),
    matchMobile = window.matchMedia('(max-width: 479px)');

export default Component.extend({
  layout, styles,
  tagName: 'header',
  classNames: ['ui-navigation'],
  localClassNames: ['container'],

  init() {
    this._super(...arguments);
    this.autoHideNavigation = bind(this, this._autoHideNavigation);
  },

  didRender() {
    this._super(...arguments);

    if (get(this, 'noSticky')) {
      this.element.style.position = 'relative';
      this.element.parentNode.style.padding = 0;

      // if already bounded, not to listen scroll event any longer
      stickyBounded = !stickyBounded;
      if (stickyBounded) $window.off('scroll', this.autoHideNavigation);

      return;
    }

    scheduleOnce('render', this, 'autoDetectNavigationHeight');
    matchNormal.addListener(bind(this, this.autoDetectNavigationHeight, 'normal'));
    matchTablet.addListener(bind(this, this.autoDetectNavigationHeight, 'tablet'));
    matchMobile.addListener(bind(this, this.autoDetectNavigationHeight, 'mobile'));

    this.element.style.position = 'fixed';
    if ($window.scrollTop() >= scrollOffset) {
      scheduleOnce('afterRender', this.element.classList, 'add', 'sticky');
    }
    stickyBounded = !stickyBounded;
    $window.on('scroll', this.autoHideNavigation);
  },

  autoDetectNavigationHeight(/*breakpoint, mediaQuery*/) {
    const primaryHeight = window.getComputedStyle(this.element.children[0]).height;
    this.element.style.height = primaryHeight;

    let secondaryHeight = '0px';
    if (this.element.children[1]) {
      secondaryHeight = window.getComputedStyle(this.element.children[1]).height;
    }

    const paddingTop = parseInt(primaryHeight.replace('px', ''), 10)
          + parseInt(secondaryHeight.replace('px', ''), 10);
    this.element.parentNode.style.paddingTop = `${paddingTop - 1}px`;
  },

  _autoHideNavigation() {
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
    stickyBounded = false;
    $window.off('scroll', this.autoHideNavigation);
  }
});
