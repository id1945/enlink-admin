import { Component } from '@angular/core'

let blogData = require('../../../../assets/data/pages/blog-data.json');
declare var require: any

@Component({
    templateUrl: './blog-grid.component.html'
})

export class BlogGridComponent {

    blogs = [];
    loading = true;

    constructor () {
        this.blogs = blogData;

        setTimeout(() => {
            this.loading = false;
        }, 1000);
    }     
}    