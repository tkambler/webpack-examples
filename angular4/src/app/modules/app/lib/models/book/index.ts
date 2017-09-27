import _ from 'lodash';

export class BookModel {

    title: string;

    constructor(options: object) {

        _.each(options, (v, k) => {
            this[k] = v;
        });

    }

}
