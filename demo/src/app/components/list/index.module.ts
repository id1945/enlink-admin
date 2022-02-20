import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoListBasicComponent } from './basic';
import { NzDemoListGridComponent } from './grid';
import { NzDemoListInfiniteLoadComponent } from './infinite-load';
import { NzDemoListLoadmoreComponent } from './loadmore';
import { NzDemoListResposiveComponent } from './resposive';
import { NzDemoListSimpleComponent } from './simple';
import { NzDemoListVerticalComponent } from './vertical';
import { NzDemoListZhComponent } from './zh.component';
import { NzDemoListEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoListEnComponent },
      { path: 'zh', component: NzDemoListZhComponent }
    ])
  ],
  declarations: [
		NzDemoListBasicComponent,
		NzDemoListGridComponent,
		NzDemoListInfiniteLoadComponent,
		NzDemoListLoadmoreComponent,
		NzDemoListResposiveComponent,
		NzDemoListSimpleComponent,
		NzDemoListVerticalComponent,
		NzDemoListZhComponent,
		NzDemoListEnComponent,

  ]
})
export class NzDemoListModule {

}
