import Component from 'ember-drag-drop/components/draggable-object-target';
import { alias } from 'ember-computed';
import { A } from 'ember-array/utils';
import get from 'ember-metal/get';

export default Component.extend({
  self: alias('self-drop'),
  dropped: alias('accepts-drag'),
  overrideClass: 'ui-droppable',
  classNameBindings: ['self', 'dropped'],

  init() {
    A(get(this, 'classNameBindings')).removeObjects(['accepts-drag', 'self-drop']);
    this._super(...arguments);
  }
});
