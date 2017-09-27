'use strict';

import app from 'app';
import angular from 'angular';

app.controller('FooController', function($log, foo) {

    $log.debug('FooController', {
        'angular': angular
    });

    const names = ['Tim', 'Laura'];

    foo(names);

});
