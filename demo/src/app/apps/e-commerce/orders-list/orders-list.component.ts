import { Component } from '@angular/core';
import { TableService } from '../../../shared/services/table.service';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
    id: number;
    name: string;
    date: string;
    amount: number;
    status:  string;
}

@Component({
    templateUrl: './orders-list.component.html'
})

export class OrdersListComponent  {

    allChecked: boolean = false;
    indeterminate: boolean = false;
    displayData = [];
    searchInput: string

    orderColumn = [
        {
            title: 'ID',
            compare: (a: DataItem, b: DataItem) => a.id - b.id,
        },
        {
            title: 'Customer',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: 'Date',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: 'Amount',
            compare: (a: DataItem, b: DataItem) => a.amount - b.amount,
        },
        {
            title: 'Status',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: ''
        }
    ]

    ordersList = [
        {
            id: 5331,
            name: 'Erin Gonzales',
            avatar: 'assets/images/avatars/thumb-1.jpg',
            date: '8 May 2019',
            amount: 137,
            status: 'approved',
            checked : false
        },
        {
            id: 5375,
            name: 'Darryl Day',
            avatar: 'assets/images/avatars/thumb-2.jpg',
            date: '6 May 2019',
            amount: 322,
            status: 'approved',
            checked : false
        },
        {
            id: 5762,
            name: 'Marshall Nichols',
            avatar: 'assets/images/avatars/thumb-3.jpg',
            date: '1 May 2019',
            amount: 543,
            status: 'approved',
            checked : false
        },
        {
            id: 5865,
            name: 'Virgil Gonzales',
            avatar: 'assets/images/avatars/thumb-4.jpg',
            date: '28 April 2019',
            amount: 876,
            status: 'pending',
            checked : false
        },
        {
            id: 5213,
            name: 'Nicole Wyne',
            avatar: 'assets/images/avatars/thumb-5.jpg',
            date: '28 April 2019',
            amount: 241,
            status: 'approved',
            checked : false
        },
        {
            id: 5311,
            name: 'Riley Newman',
            avatar: 'assets/images/avatars/thumb-6.jpg',
            date: '19 April 2019',
            amount: 872,
            status: 'rejected',
            checked : false
        },
        {
            id: 5387,
            name: 'Pamela Wanda',
            avatar: 'assets/images/avatars/thumb-7.jpg',
            date: '18 April 2019',
            amount: 728,
            status: 'approved',
            checked : false
        },
        {
            id: 5390,
            name: 'Pamela Wanda',
            avatar: 'assets/images/avatars/thumb-7.jpg',
            date: '16 April 2019',
            amount: 802,
            status: 'pending',
            checked : false
        },
        {
            id: 5317,
            name: 'Lilian Stone',
            avatar: 'assets/images/avatars/thumb-8.jpg',
            date: '12 April 2019',
            amount: 569,
            status: 'approved',
            checked : false
        },
        {
            id: 5291,
            name: 'Victor Terry',
            avatar: 'assets/images/avatars/thumb-9.jpg',
            date: '10 April 2019',
            amount: 132,
            status: 'approved',
            checked : false
        },
        {
            id: 5288,
            name: 'Wilma Young',
            avatar: 'assets/images/avatars/thumb-10.jpg',
            date: '8 April 2019',
            amount: 528,
            status: 'rejected',
            checked : false
        },
        {
            id: 5301,
            name: 'Jane Wilson',
            avatar: 'assets/images/avatars/thumb-11.jpg',
            date: '8 April 2019',
            amount: 632,
            status: 'approved',
            checked : false
        },
        {
            id: 5355,
            name: 'Evelyn Silva',
            avatar: 'assets/images/avatars/thumb-12.jpg',
            date: '6 April 2019',
            amount: 987,
            status: 'approved',
            checked : false
        },
    ]

    constructor(private tableSvc : TableService) {
        this.displayData = this.ordersList
    }

    search() {
        const data = this.ordersList
        this.displayData = this.tableSvc.search(this.searchInput, data )
    }

}    