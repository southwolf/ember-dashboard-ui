import Component from 'ember-component';
import layout from './template';
import styles from './styles';
import inject from 'ember-service/inject';
import computed, { reads } from 'ember-computed';
import { htmlSafe } from 'ember-string';
import get from 'ember-metal/get';

export default Component.extend({
  layout, styles,
  classNames: ['ui-loading'],
  localClassNames: ['container'],

  loadingService: inject('loading'),
  loading: reads('loadingService.loading'),
  finish: reads('loadingService.finish'),

  height: 2,

  attributeBindings: ['style'],
  style: computed('loading', function() {
    return htmlSafe(`height: ${get(this, 'loading') ? get(this, 'height') : 0}px;`);
  }),

  color: '#2ecc71',
  progressStyle: computed('color', function() {
    return htmlSafe(`background-color: ${get(this, 'color')};`)
  }),

  progressClassNames: computed('finish', function() {
    const progress = get(this, 'styles.progress-bar');
    return get(this, 'finish') ? `${progress} ${get(this, 'styles.finish')}` : progress;
  })
});
