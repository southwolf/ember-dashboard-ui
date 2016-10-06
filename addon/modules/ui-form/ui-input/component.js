import Component from 'ember-component';
import layout from './template';
import styles from '../styles';
import { guidFor } from 'ember-metal/utils';
import get from 'ember-metal/get';
import set, { setProperties } from 'ember-metal/set';

export default Component.extend({
  layout, styles,
  tagName: '',

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
  }
});
