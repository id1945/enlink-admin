import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCheckboxBasicComponent } from './basic';
import { NzDemoCheckboxCheckAllComponent } from './check-all';
import { NzDemoCheckboxControllerComponent } from './controller';
import { NzDemoCheckboxDisabledComponent } from './disabled';
import { NzDemoCheckboxGroupComponent } from './group';
import { NzDemoCheckboxLayoutComponent } from './layout';
import { NzDemoCheckboxZhComponent } from './zh.component';
import { NzDemoCheckboxEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCheckboxEnComponent },
      { path: 'zh', component: NzDemoCheckboxZhComponent }
    ])
  ],
  declarations: [
		NzDemoCheckboxBasicComponent,
		NzDemoCheckboxCheckAllComponent,
		NzDemoCheckboxControllerComponent,
		NzDemoCheckboxDisabledComponent,
		NzDemoCheckboxGroupComponent,
		NzDemoCheckboxLayoutComponent,
		NzDemoCheckboxZhComponent,
		NzDemoCheckboxEnComponent,

  ]
})
export class NzDemoCheckboxModule {

}
