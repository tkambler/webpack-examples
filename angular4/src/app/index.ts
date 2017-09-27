import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'web-animations-js';
import 'zone.js/dist/zone';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './modules/app';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err) => {
        console.log(err);
    });
