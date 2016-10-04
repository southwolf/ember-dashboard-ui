import Mixin from 'ember-metal/mixin';
import inject from 'ember-service/inject';
import { isPresent } from 'ember-utils';

export default Mixin.create({
  loadingSlider: inject('ui-loading'),

  actions: {
    loading() {
      let loadingSliderService = this.get('loadingSlider');
      loadingSliderService.startLoading();
      if (isPresent(this.router)) {
        this.router.one('didTransition', function() {
          loadingSliderService.endLoading();
        });
      }
      if (this.get('bubbleLoadingSlider')) {
        return true;
      }
    },

    finished() {
      this.get('loadingSlider').endLoading();
    }
  }
});
