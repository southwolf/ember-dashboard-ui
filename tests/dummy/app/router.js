import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('drag-and-drop');
  this.route('form');
  this.route('icon');
  this.route('notification');
  this.route('page');
  this.route('button');
  this.route('svgicon');
});

export default Router;
