import Component from 'ember-component';
import UIFormWrapperMixin from '../../../mixins/ui-form-wrapper';
import layout from './template';
import styles from '../styles';
import get from 'ember-metal/get';

export default Component.extend(UIFormWrapperMixin, {
  layout,
  styles,
  tagName: '',

  didInsertElement() {
    if (!get(this, 'hasSplit')) {
      if (get(this, 'label')) {
        const input = document.getElementById(this.fieldId);
        input.parentNode.classList.add('has-label');
      }
    }
  }
});
