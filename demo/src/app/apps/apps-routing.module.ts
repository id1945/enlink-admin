import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { MailComponent } from './mail/mail.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { OrdersListComponent } from './e-commerce/orders-list/orders-list.component';
import { ProductsListComponent } from './e-commerce/products-list/products-list.component';
import { ProductComponent } from './e-commerce/product/product.component';

const routes: Routes = [
    {
        path: 'chat',
        component: ChatComponent,
        data: {
            title: 'Chat',
            headerDisplay: "none"
        }
    },
    {
        path: 'file-manager',
        component: FileManagerComponent,
        data: {
            title: 'File Manager',
            headerDisplay: "none"
        }
    },
    {
        path: 'mail',
        component: MailComponent,
        data: {
            title: 'Mail',
            headerDisplay: "none"
        }
    },
    {
        path: 'projects',
        children: [
            {
                path: 'project-list',
                component: ProjectListComponent,
                data: {
                    title: 'Project List',
                    headerDisplay: "none"
                }
            },
            {
                path: 'project-details',
                component: ProjectDetailsComponent,
                data: {
                    title: 'Project Details',
                    headerDisplay: "none"
                }
            }
        ]
    },
    {
        path: 'e-commerce',
        data: {
            title: 'E-commerce'
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'orders-list',
                component: OrdersListComponent,
                data: {
                    title: 'Orders List'
                }
            },
            {
                path: 'product',
                component: ProductComponent,
                data: {
                    title: 'Product',
                    headerDisplay: "none"
                }
            },
            {
                path: 'products-list',
                component: ProductsListComponent,
                data: {
                    title: 'Products List'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppsRoutingModule { }
