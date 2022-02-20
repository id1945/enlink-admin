import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoAffixBasicComponent } from './basic';
import { NzDemoAffixOnChangeComponent } from './on-change';
import { NzDemoAffixTargetComponent } from './target';
import { NzDemoAffixZhComponent } from './zh.component';
import { NzDemoAffixEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAffixEnComponent },
      { path: 'zh', component: NzDemoAffixZhComponent }
    ])
  ],
  declarations: [
		NzDemoAffixBasicComponent,
		NzDemoAffixOnChangeComponent,
		NzDemoAffixTargetComponent,
		NzDemoAffixZhComponent,
		NzDemoAffixEnComponent,

  ]
})
export class NzDemoAffixModule {

}
