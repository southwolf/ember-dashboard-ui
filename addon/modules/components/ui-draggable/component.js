import Component from 'ember-drag-drop/components/draggable-object';
import layout from './template';
import { alias } from 'ember-computed';
import { A } from 'ember-array/utils';
import get from 'ember-metal/get';

export default Component.extend({
  layout,
  sortable: alias('isSortable'),
  draggable: alias('dragReady'),
  overrideClass: 'ui-draggable',
  classNameBindings: ['isDraggingObject:dragging', 'dragReady:draggable'],

  init() {
    A(get(this, 'classNameBindings'))
      .removeObjects([':js-draggableObject', 'isDraggingObject:is-dragging-object:']);
    this._super(...arguments);
  }
});
