import Component from 'ember-components/text-field';
import get from 'ember-metal/get';

export default Component.extend({
  type: 'radio',

  change(event) {
    const value = get(this, 'value');

    if (value != get(this, 'currentValue')) {
      this.attrs.onChange(value, event);
    }

    return true;
  }
});
