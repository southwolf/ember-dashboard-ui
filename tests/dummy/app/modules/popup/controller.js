import Controller from 'ember-controller';

export default Controller.extend({
  isShow: true,

  actions: {
    closePopup() {
      this.toggleProperty('isShow');
    },

    onClick() {
      this.toggleProperty('isShow');
    }
  }
});
