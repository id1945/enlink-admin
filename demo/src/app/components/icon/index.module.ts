import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoIconBasicComponent } from './basic';
import { NzDemoIconCustomComponent } from './custom';
import { NzDemoIconIconfontComponent } from './iconfont';
import { NzDemoIconNamespaceComponent } from './namespace';
import { NzDemoIconTwotoneComponent } from './twotone';
import { NzDemoIconZhComponent } from './zh.component';
import { NzDemoIconEnComponent } from './en.component';
import { NzPageDemoIconZhComponent } from './zh.page.component';
import { NzPageDemoIconEnComponent } from './en.page.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoIconEnComponent },
      { path: 'zh', component: NzDemoIconZhComponent }
    ])
  ],
  declarations: [
		NzDemoIconBasicComponent,
		NzDemoIconCustomComponent,
		NzDemoIconIconfontComponent,
		NzDemoIconNamespaceComponent,
		NzDemoIconTwotoneComponent,
		NzDemoIconZhComponent,
		NzDemoIconEnComponent,
		NzPageDemoIconZhComponent,
		NzPageDemoIconEnComponent,

  ]
})
export class NzDemoIconModule {

}
