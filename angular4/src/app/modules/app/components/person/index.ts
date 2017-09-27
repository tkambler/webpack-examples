import { Component, Input } from '@angular/core';

@Component({
    'selector': 'person',
    'template': `
        <p>Name: {{ name }}.</p>
    `
})
export class PersonComponent {

    @Input() name: string;

}
