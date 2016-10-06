import Controller from 'ember-controller';
import O from 'ember-object';
import set from 'ember-metal/set';

export default Controller.extend({
  person: O.create({
    name: 'Albert Yu',
    gender: 1,
    number: 54,
    alive: true,
    online: true,
    error: 'Something wrong has happened'
  }),

  actions: {
    changeGender(value) {
      set(this, 'person.gender', value);
    }
  }
});
