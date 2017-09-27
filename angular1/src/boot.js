'use strict';

import angular from 'angular';
import app from 'app';

app.run(function($log) {
    $log.debug('App is running.');
});

angular.bootstrap(document, ['app']);
