import Component from 'ember-component';
import Clipboard from 'clipboard';
import { bind } from 'ember-runloop';

export default Component.extend({
  classNames: ['w-container'],
  localClassNames: ['preview'],

  didInsertElement() {
    this.clipboard = new Clipboard(this.element.querySelectorAll('i'), {
      text(trigger) { return trigger.className; }
    });

    this.notifyCopied = bind(this, this._notifyCopied);
    this.clipboard.on('success', this.notifyCopied);
  },

  _notifyCopied(event) {
    this.notification.success(`Copy to clipboard:&nbsp;<strong>${event.text}</strong>`);
  },

  willDestroy() {
    this.clipboard.destroy();
  }
});
