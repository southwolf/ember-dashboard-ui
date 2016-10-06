import Mixin from 'ember-metal/mixin';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import { guidFor } from 'ember-metal/utils';
import set, { setProperties } from 'ember-metal/set';

export default Mixin.create({
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
  }
});
