import Component from 'ember-component';
import layout from './template';
import styles from './styles';

export default Component.extend({
  layout, styles,
  tagName: '',

  actions: {
    clickBackground(e) {
      if (e.target.className.includes(styles['static-background']) && !this.get('important')) {
        this.get('closePopup')();
      }
    }
  }
});
