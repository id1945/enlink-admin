import { Component } from '@angular/core';
import { TableService } from '../../../shared/services/table.service';

interface DataItem {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    status:  string;
}

@Component({
    templateUrl: './products-list.component.html'
})

export class ProductsListComponent  {

    selectedCategory: string;
    selectedStatus: string;
    searchInput: any;
    displayData = [];

    orderColumn = [
        {
            title: 'ID',
            compare: (a: DataItem, b: DataItem) => a.id - b.id,
        },
        {
            title: 'Product',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: 'Category',
            compare: (a: DataItem, b: DataItem) => a.category.localeCompare(b.category)
        },
        {
            title: 'Price',
            compare: (a: DataItem, b: DataItem) => a.price - b.price,
        },
        {
            title: 'Stock',
            compare: (a: DataItem, b: DataItem) => a.quantity - b.quantity,
        },
        {
            title: 'Status',
            compare: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name)
        },
        {
            title: ''
        }
    ]

    productsList = [
        {
            id: 31,
            name: 'Gray Sofa',
            avatar: 'assets/images/others/thumb-9.jpg',
            category: 'Home Decoration',
            price: 912,
            quantity: 23,
            status: 'in stock',
            checked : false
        },
        {
            id: 32,
            name: 'Beat Headphone',
            avatar: 'assets/images/others/thumb-10.jpg',
            category: 'Eletronic',
            price: 137,
            quantity: 56,
            status: 'in stock',
            checked : false
        },
        {
            id: 33,
            name: 'Wooden Rhino',
            avatar: 'assets/images/others/thumb-11.jpg',
            category: 'Home Decoration',
            price: 912,
            quantity: 12,
            status: 'in stock',
            checked : false
        },
        {
            id: 34,
            name: 'Red Chair',
            avatar: 'assets/images/others/thumb-12.jpg',
            category: 'Home Decoration',
            price: 128,
            quantity: 0,
            status: 'out of stock',
            checked : false
        },
        {
            id: 35,
            name: 'Wristband',
            avatar: 'assets/images/others/thumb-13.jpg',
            category: 'Eletronic',
            price: 776,
            quantity: 0,
            status: 'out of stock',
            checked : false
        },
        {
            id: 36,
            name: 'Charging Cable',
            avatar: 'assets/images/others/thumb-14.jpg',
            category: 'Eletronic',
            price: 119,
            quantity: 37,
            status: 'in stock',
            checked : false
        },
        {
            id: 37,
            name: 'Three Legs',
            avatar: 'assets/images/others/thumb-15.jpg',
            category: 'Home Decoration',
            price: 199,
            quantity: 17,
            status: 'in stock',
            checked : false
        },
    ]  
    
    constructor(private tableSvc : TableService) {
        this.displayData = this.productsList
    }

    search(): void {
        const data = this.productsList
        this.displayData = this.tableSvc.search(this.searchInput, data )
    }

    categoryChange(value: string): void {
        const data = this.productsList
        value !== 'All'? this.displayData = data.filter(elm => elm.category === value) : this.displayData = data
    }

    statusChange(value: string): void {
        const data = this.productsList
        value !== 'All'? this.displayData = data.filter(elm => elm.status === value) : this.displayData = data
    }
}    