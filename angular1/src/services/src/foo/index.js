'use strict';

import app from 'app';
import angular from 'angular';

app.factory('foo', function($log) {

    return (rows) => {
        angular.forEach(rows, (row) => {
            $log.debug('foo:row', row);
        });
    };

});
