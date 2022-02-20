import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [
    {
        path: 'chartjs',
        component: ChartjsComponent,
        data: {
            title: 'Chart Js'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChartsRoutingModule { }
