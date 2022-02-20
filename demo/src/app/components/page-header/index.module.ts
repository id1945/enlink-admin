import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoPageHeaderActionsComponent } from './actions';
import { NzDemoPageHeaderBasicComponent } from './basic';
import { NzDemoPageHeaderBreadcrumbComponent } from './breadcrumb';
import { NzDemoPageHeaderContentComponent } from './content';
import { NzDemoPageHeaderGhostComponent } from './ghost';
import { NzDemoPageHeaderResponsiveComponent } from './responsive';
import { NzDemoPageHeaderZhComponent } from './zh.component';
import { NzDemoPageHeaderEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoPageHeaderEnComponent },
      { path: 'zh', component: NzDemoPageHeaderZhComponent }
    ])
  ],
  declarations: [
		NzDemoPageHeaderActionsComponent,
		NzDemoPageHeaderBasicComponent,
		NzDemoPageHeaderBreadcrumbComponent,
		NzDemoPageHeaderContentComponent,
		NzDemoPageHeaderGhostComponent,
		NzDemoPageHeaderResponsiveComponent,
		NzDemoPageHeaderZhComponent,
		NzDemoPageHeaderEnComponent,

  ]
})
export class NzDemoPageHeaderModule {

}
