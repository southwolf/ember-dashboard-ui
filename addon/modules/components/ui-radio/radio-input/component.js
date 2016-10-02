import Component from 'ember-component';
import get from 'ember-metal/get';

export default Component.extend({
  tagName: 'input',
  classNames: ['ember-radio'],

  attributeBindings: [
    'checked',
    'disabled',
    'name',
    'required',
    'type',
    'value'
  ],

  change() {
    const value = get(this, 'value');
    const groupValue = get(this, 'groupValue');

    if (groupValue !== value) {
      get(this, 'onChange')(value);
    }
  }
});
