import { Component } from '@angular/core'

let blogData = require('../../../../assets/data/pages/blog-data.json');
declare var require: any

@Component({
    templateUrl: './blog-list.component.html'
})

export class BlogListComponent {

    blogs = [];
    loading = true;

    constructor () {
        this.blogs = blogData;

        setTimeout(() => {
            this.loading = false;
        }, 1000);
    }     
}    