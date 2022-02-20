import { Component } from '@angular/core'

@Component({
    templateUrl: './invoice.component.html'
})

export class InvoiceComponent {

    itemData = [
        {
            name   : 'Asus Zenfone 3 Zoom ZE553KL Dual Sim (4GB, 64GB)',
            quantity   : 2,
            price: 450
        },
        {
            name   : 'HP Pavilion 15-au103TX 15.6˝ Laptop Red',
            quantity   : 1,
            price: 550
        },
        {
            name   : 'Canon EOS 77D',
            quantity   : 1,
            price: 875
        },
    ];
}    