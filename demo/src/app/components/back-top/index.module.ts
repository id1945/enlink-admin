import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoBackTopBasicComponent } from './basic';
import { NzDemoBackTopCustomComponent } from './custom';
import { NzDemoBackTopTargetComponent } from './target';
import { NzDemoBackTopZhComponent } from './zh.component';
import { NzDemoBackTopEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoBackTopEnComponent },
      { path: 'zh', component: NzDemoBackTopZhComponent }
    ])
  ],
  declarations: [
		NzDemoBackTopBasicComponent,
		NzDemoBackTopCustomComponent,
		NzDemoBackTopTargetComponent,
		NzDemoBackTopZhComponent,
		NzDemoBackTopEnComponent,

  ]
})
export class NzDemoBackTopModule {

}
