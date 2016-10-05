import UINotificationService from 'ember-choice-ui/modules/ui-notification/service';

export default {
  name: 'ui-notification-service',

  initialize(application) {
    application.inject('route', 'notification', 'service:ui-notification');
    application.inject('component', 'notification', 'service:ui-notification');
    application.inject('controller', 'notification', 'service:ui-notification');
  }
};
