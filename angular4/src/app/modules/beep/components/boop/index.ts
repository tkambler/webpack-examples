import { Component, HostBinding } from '@angular/core';

@Component({
    'selector': 'boop',
    'template': `
        <div (click)="onClick()">
            BoopComponent.
        </div>
    `
})
export class BoopComponent {

//     @HostBinding('attr.class') cssClass = 'something';

    @HostBinding('attr.class') cssClass = this.foo;

    ngOnInit() {
        console.log('BoopComponent has initialized.', {
            'foo': this.foo
        });
    }

    onClick() {
        console.log('Beep.');
    }

    get foo() {
        return 'bar';
    }

}
