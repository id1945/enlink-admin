import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoPopconfirmBasicComponent } from './basic';
import { NzDemoPopconfirmCustomIconComponent } from './custom-icon';
import { NzDemoPopconfirmDynamicTriggerComponent } from './dynamic-trigger';
import { NzDemoPopconfirmLocaleComponent } from './locale';
import { NzDemoPopconfirmPlacementComponent } from './placement';
import { NzDemoPopconfirmZhComponent } from './zh.component';
import { NzDemoPopconfirmEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoPopconfirmEnComponent },
      { path: 'zh', component: NzDemoPopconfirmZhComponent }
    ])
  ],
  declarations: [
		NzDemoPopconfirmBasicComponent,
		NzDemoPopconfirmCustomIconComponent,
		NzDemoPopconfirmDynamicTriggerComponent,
		NzDemoPopconfirmLocaleComponent,
		NzDemoPopconfirmPlacementComponent,
		NzDemoPopconfirmZhComponent,
		NzDemoPopconfirmEnComponent,

  ]
})
export class NzDemoPopconfirmModule {

}
