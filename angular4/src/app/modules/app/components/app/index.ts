import { Component } from '@angular/core';

import './style.scss';

@Component({
    'selector': 'app',
    'template': `
        <div>
            <p>I am the root component. Title is: {{ title }}.</p>
            <foo></foo>
        </div>
        <boop></boop>
    `
})
export class AppComponent {

    title: string = 'app';

    constructor() {
        console.log('The AppComponent is constructing.');
    }

    ngOnInit() {
        console.log('The AppComponent has initialized.', {
            'this': this
        });
    }

}
