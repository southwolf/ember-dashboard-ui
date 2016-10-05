import Component from 'ember-drag-drop/components/sortable-objects';
import set from 'ember-metal/set';

export default Component.extend({
  overrideClass: 'ui-sortable',
  classNameBindings: ['sorting'],

  dragStart() {
    set(this, 'sorting', true);
    this._super(...arguments);
  },

  drop() {
    set(this, 'sorting', false);
    this._super(...arguments);
  }
});
