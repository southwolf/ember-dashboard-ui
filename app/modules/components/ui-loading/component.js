import Component from '../../../components/loading-slider';
import inject from 'ember-service/inject';
import get from 'ember-metal/get';

export default Component.extend({
  loadingSlider: inject('ui-loading'),
});
