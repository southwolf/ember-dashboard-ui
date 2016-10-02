import Controller from 'ember-controller';
import set from 'ember-metal/set';

export default Controller.extend({
  gender: 1,

  actions: {
    changeGender(value) {
      set(this, 'gender', value);
    }
  }
});
