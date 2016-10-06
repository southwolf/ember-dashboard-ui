import Component from 'ember-component';
import UIFormWrapperMixin from '../../../mixins/ui-form-wrapper';
import layout from './template';
import styles from '../styles';
import computed from 'ember-computed';
import get from 'ember-metal/get';

export default Component.extend(UIFormWrapperMixin, {
  layout,
  styles,
  tagName: '',

  checkedClassName: computed('checked', function() {
    return get(this, 'checked') ? 'checked' : 'unchecked';
  }),
});
