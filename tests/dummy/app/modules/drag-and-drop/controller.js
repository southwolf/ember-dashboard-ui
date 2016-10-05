import Controller from 'ember-controller';
import { A } from 'ember-array/utils';

export default Controller.extend({
  person: {
    name: 'Albert Yu',
    gender: '㊚'
  },
  people: A([
    { id: 1, name: 'Albert Yu', gender: '㊚' },
    { id: 2, name: 'Wester Xi', gender: '㊚' },
    { id: 3, name: 'Richie Castle', gender: '㊚' },
    { id: 4, name: 'Kate Becket', gender: '㊛' },
    { id: 5, name: 'Alexis Castle', gender: '㊛' }
  ]),
  actions: {
    process(content, options) {
      console.log(content, options);
    },

    dragStart(content, event) {
      console.log('start: ', content);
    },

    dragMove(event) {
      // console.log('moving: ', event);
    },

    dragOver(event) {
      console.log('over: ', event);
    },

    dragOut() {
      console.log('out...');
    },

    dragEnd(content, event) {
      console.log('end: ', content);
    },

    sortEnd(event) {
      console.log('sort end: ', event);
    }
  }
});
