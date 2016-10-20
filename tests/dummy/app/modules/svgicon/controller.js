import Controller from 'ember-controller';
import Clipboard from 'clipboard';

export default Controller.extend({
  size: 16,

  hrefText: '',

  actions: {
    showHref(event) {
      this.set('hrefText', event.target.querySelector('use').getAttribute('xlink:href'));
    },

    hideHref() {
      this.set('hrefText', '');
    },

    copyHref(event) {
      const result = this.get('hrefText').replace('#', '');
      this.clipboard = new Clipboard(document.body, {
        text(trigger) { return result}
      });
      this.notification.success(`Copy to clipboard:&nbsp;<strong>${result}</strong>`);
    }
  }
});
