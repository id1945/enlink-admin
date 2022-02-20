import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoDividerHorizontalComponent } from './horizontal';
import { NzDemoDividerOrientationComponent } from './orientation';
import { NzDemoDividerVerticalComponent } from './vertical';
import { NzDemoDividerZhComponent } from './zh.component';
import { NzDemoDividerEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoDividerEnComponent },
      { path: 'zh', component: NzDemoDividerZhComponent }
    ])
  ],
  declarations: [
		NzDemoDividerHorizontalComponent,
		NzDemoDividerOrientationComponent,
		NzDemoDividerVerticalComponent,
		NzDemoDividerZhComponent,
		NzDemoDividerEnComponent,

  ]
})
export class NzDemoDividerModule {

}
