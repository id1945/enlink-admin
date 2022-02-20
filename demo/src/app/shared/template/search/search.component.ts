import { Component } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent {

    search : any

    files = [
        {
            title: 'Quater Report.exl',
            desc: 'by Finance',
            icon: 'file-excel',
            color: 'ant-avatar-' + 'cyan'
        },
        {
            title: 'Documentaion.docx',
            desc: 'by Developers',
            icon: 'file-word',
            color: 'ant-avatar-' + 'blue'
        },
        {
            title: 'Recipe.txt',
            desc: 'by The Chef',
            icon: 'file-text',
            color: 'ant-avatar-' + 'purple'
        },
        {
            title: 'Project Requirement.pdf',
            desc: 'by Project Manager',
            icon: 'file-pdf',
            color: 'ant-avatar-' + 'red'
        }
    ]

    members = [
        {
            title: 'Erin Gonzales',
            desc: 'UI/UX Designer',
            img: 'assets/images/avatars/thumb-1.jpg',
        },
        {
            title: 'Darryl Day',
            desc: 'Software Engineer',
            img: 'assets/images/avatars/thumb-2.jpg',
        },
        {
            title: 'Marshall Nichols ',
            desc: 'Data Analyst',
            img: 'assets/images/avatars/thumb-3.jpg',
        }
    ]

    feeds = [
        {
            title: '5 Best Handwriting Fonts',
            desc: '25 Nov 2018',
            img: 'assets/images/others/img-1.jpg',
        }
    ]

}

