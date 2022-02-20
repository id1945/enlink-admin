import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTreeSelectAsyncComponent } from './async';
import { NzDemoTreeSelectBasicComponent } from './basic';
import { NzDemoTreeSelectCheckableComponent } from './checkable';
import { NzDemoTreeSelectCustomizedIconComponent } from './customized-icon';
import { NzDemoTreeSelectMultipleComponent } from './multiple';
import { NzDemoTreeSelectZhComponent } from './zh.component';
import { NzDemoTreeSelectEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTreeSelectEnComponent },
      { path: 'zh', component: NzDemoTreeSelectZhComponent }
    ])
  ],
  declarations: [
		NzDemoTreeSelectAsyncComponent,
		NzDemoTreeSelectBasicComponent,
		NzDemoTreeSelectCheckableComponent,
		NzDemoTreeSelectCustomizedIconComponent,
		NzDemoTreeSelectMultipleComponent,
		NzDemoTreeSelectZhComponent,
		NzDemoTreeSelectEnComponent,

  ]
})
export class NzDemoTreeSelectModule {

}
