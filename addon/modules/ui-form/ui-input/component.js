import Component from 'ember-component';
import UIFormWrapperMixin from '../../../mixins/ui-form-wrapper';
import layout from './template';
import styles from '../styles';

export default Component.extend(UIFormWrapperMixin, {
  layout,
  styles,
  tagName: '',

  // override mixin
  checkedClassName: null
});
