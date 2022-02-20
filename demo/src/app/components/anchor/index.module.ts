import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoAnchorBasicComponent } from './basic';
import { NzDemoAnchorStaticComponent } from './static';
import { NzDemoAnchorZhComponent } from './zh.component';
import { NzDemoAnchorEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAnchorEnComponent },
      { path: 'zh', component: NzDemoAnchorZhComponent }
    ])
  ],
  declarations: [
		NzDemoAnchorBasicComponent,
		NzDemoAnchorStaticComponent,
		NzDemoAnchorZhComponent,
		NzDemoAnchorEnComponent,

  ]
})
export class NzDemoAnchorModule {

}
