import Mixin from 'ember-metal/mixin';
import get from 'ember-metal/get';
import { guidFor } from 'ember-metal/utils';
import set, { setProperties } from 'ember-metal/set';

export default Mixin.create({
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
