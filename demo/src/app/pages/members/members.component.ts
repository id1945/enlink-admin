import { Component } from '@angular/core'

@Component({
    templateUrl: './members.component.html'
})

export class MembersComponent {

    view: string = 'cardView'

    memberList = [
        {
            name: 'Erin Gonzales',
            img: 'assets/images/avatars/thumb-1.jpg',
            mail: 'erin.gon@gmail.com'
        },
        {
            name: 'Darryl Day',
            img: 'assets/images/avatars/thumb-2.jpg',
            mail: 'darryl.d@gmail.com'
        },
        {
            name: 'Marshall Nichols',
            img: 'assets/images/avatars/thumb-3.jpg',
            mail: 'marshalln@gmail.com'
        },
        {
            name: 'Virgil Gonzales',
            img: 'assets/images/avatars/thumb-4.jpg',
            mail: 'virgil14@gmail.com'
        },
        {
            name: 'Nicole Wyne',
            img: 'assets/images/avatars/thumb-5.jpg',
            mail: 'nicolew@gmail.com'
        },
        {
            name: 'Riley Newman',
            img: 'assets/images/avatars/thumb-6.jpg',
            mail: 'rileyn93@gmail.com'
        },
        {
            name: 'Pamela Wanda',
            img: 'assets/images/avatars/thumb-7.jpg',
            mail: 'pamelaw@gmail.com'
        }
    ]
}