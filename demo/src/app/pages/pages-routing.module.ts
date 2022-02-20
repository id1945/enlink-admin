import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MembersComponent } from './members/members.component';
import { PricingComponent } from './pricing/pricing.component';
import { SettingComponent } from './setting/setting.component';
import { BlogGridComponent } from './blog/blog-grid/blog-grid.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        data: {
            title: 'Profile'
        }
    },
    {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
            title: 'Invoice'
        }
    },
    {
        path: 'members',
        component: MembersComponent,
        data: {
            title: 'Members',
            headerDisplay: "none"
        }
    },
    {
        path: 'pricing',
        component: PricingComponent,
        data: {
            title: 'Pricing'
        }
    },
    {
        path: 'setting',
        component: SettingComponent,
        data: {
            title: 'Setting',
            headerDisplay: "none"
        }
    },
    {
        path: 'blog',
        data: {
            title: 'Blog '
        },
        children: [
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }, 
            {
                path: 'blog-grid',
                component: BlogGridComponent,
                data: {
                    title: 'Blog Grid'
                }
            },
            {
                path: 'blog-list',
                component: BlogListComponent,
                data: {
                    title: 'Blog List'
                }
            },
            {
                path: 'blog-post',
                component: BlogPostComponent,
                data: {
                    title: 'Blog Post'
                }
            }
        ]    
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
