'use strict';

import template from './template.html';
import './style.scss';

import states from 'glob-loader!./modules.pattern';
console.log('states...', states);

class App {

    init() {

        console.log('template', template);

        document.getElementById('content').innerHTML = template;

    }

}

export default App;
