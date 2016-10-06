import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import computed from 'ember-computed';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  layout, styles,

  attributeBindings: ['style'],
  classNames: ['ui-notification'],
  classNameBindings: ['positionClassName'],
  localClassNames: ['container'],

  width: 540,
  style: computed('width', function() {
    return htmlSafe(`width: ${get(this, 'width')}px`);
  }),

  position: 'top',
  positionClassName: computed('position', function() {
    // TODO: provide multi positions
    return get(this, `styles.${get(this, 'position')}`);
  }),

  init() {
    this._super(...arguments);
    this.notification.info('<strong>This is an example message!!!</strong>', {
      autoClear: 0
    });

    window.setTimeout(() => {
      this.notification.success('<strong>这是一条提醒消息的范例！！！</strong>');
    }, 5000)

    this.notification.warning('<strong>This is an example message!!!</strong>');
    this.notification.error('<strong>这是一条提醒消息的范例！！！</strong>', {
      autoClear: 10000
    });
  },

  actions: {
    close(instance) {
      this.notification.remove(instance);
    },

    pause(instance) {
      if (get(instance, 'remaining')) {
        set(instance, 'paused', true);
        this.notification.pause(instance);
      }
    },

    resume(instance) {
      if (get(instance, 'remaining')) {
        set(instance, 'paused', false);
        this.notification.start(instance);
      }
    }
  }
});
