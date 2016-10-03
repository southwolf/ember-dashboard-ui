import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import inject from 'ember-service/inject';
import computed, { reads } from 'ember-computed';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  layout, styles,
  classNames: ['ui-loading'],
  localClassNames: ['container'],

  loadingService: inject('loading'),
  loading: reads('loadingService.loading'),
  finish: reads('loadingService.finish'),

  attributeBindings: ['style'],
  style: computed('loading', function() {
    return htmlSafe(`height: ${get(this, 'loading') ? 2 : 0}px`);
  }),

  progressClassNames: computed('finish', function() {
    const progress = get(this, 'styles.progress-bar');
    return get(this, 'finish') ? `${progress} ${get(this, 'styles.finish')}` : progress;
  })
});
