import { Component } from '@angular/core';
import { BookModel } from 'app/modules/app/lib/models/book';

@Component({
    'selector': 'foo',
    'template': `
        <div>
            People:
            <ul>
                <li *ngFor="let name of names">
                    <person [name]="name"></person>
                </li>
            </ul>
            Books:
            <ul>
                <li *ngFor="let book of books">
                    {{ book.title }}
                </li>
            </ul>
        </div>
    `
})
export class FooComponent {

    names: string[];
    books: BookModel[];

    constructor() {

        this.names = [
            'Foo', 'Bar', 'Baz', 'Herp', 'Derp'
        ];

        this.books = [
            new BookModel({
                'title': 'War and Peace',
                'author': 'John Doe'
            })
        ]

        console.log('this.books', this.books);

    }

    ngOnInit() {
    }

}
