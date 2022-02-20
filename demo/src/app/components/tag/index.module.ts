import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTagBasicComponent } from './basic';
import { NzDemoTagCheckableComponent } from './checkable';
import { NzDemoTagColorfulComponent } from './colorful';
import { NzDemoTagControlComponent } from './control';
import { NzDemoTagHotTagsComponent } from './hot-tags';
import { NzDemoTagStatusComponent } from './status';
import { NzDemoTagZhComponent } from './zh.component';
import { NzDemoTagEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTagEnComponent },
      { path: 'zh', component: NzDemoTagZhComponent }
    ])
  ],
  declarations: [
		NzDemoTagBasicComponent,
		NzDemoTagCheckableComponent,
		NzDemoTagColorfulComponent,
		NzDemoTagControlComponent,
		NzDemoTagHotTagsComponent,
		NzDemoTagStatusComponent,
		NzDemoTagZhComponent,
		NzDemoTagEnComponent,

  ]
})
export class NzDemoTagModule {

}
