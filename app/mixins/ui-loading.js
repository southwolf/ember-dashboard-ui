import Mixin from 'ember-metal/mixin';
import inject from 'ember-service/inject';
import { isPresent } from 'ember-utils';

export default Mixin.create({
  loadingSlider: inject('ui-loading'),

  actions: {
    loading() {
      this._super(...arguments);

      const loadingSliderService = this.get('loadingSlider');
      loadingSliderService.start();

      if (isPresent(this.router)) {
        this.router.one('didTransition', function() {
          loadingSliderService.stop();
        });
      }

      if (this.get('bubbleLoadingSlider')) {
        return true;
      }
    }
  }
});
