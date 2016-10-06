import Component from 'ember-component';
import layout from './template';
import styles from '../styles';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { guidFor } from 'ember-metal/utils';
import set, { setProperties } from 'ember-metal/set';

export default Component.extend({
  layout, styles,
  tagName: '',

  checked: computed('currentValue', function() {
    return get(this, 'value') == get(this, 'currentValue');
  }),

  checkedClassName: computed('checked', function() {
    return get(this, 'checked') ? 'checked' : 'unchecked';
  }),

  init() {
    const id = guidFor(this);

    if (get(this, 'hasSplit')) {
      setProperties(this, {
        tagName: 'div',
        fieldId: `${id}_field`,
        classNames: ['ember-view', 'split-wrapper']
      });
    } else {
      set(this, 'fieldId', id);
    }

    this._super(...arguments);
  },

  actions: {
    syncCheckState() {
      this.toggleProperty();
    }
  }
});
