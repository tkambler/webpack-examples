'use strict';

import app from 'app';

app.filter('foo', function() {

    return (val) => {
        return val;
    };

});
