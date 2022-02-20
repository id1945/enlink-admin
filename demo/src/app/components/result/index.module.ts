import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoResultCustomComponent } from './custom';
import { NzDemoResultErrorComponent } from './error';
import { NzDemoResultFofComponent } from './fof';
import { NzDemoResultFooComponent } from './foo';
import { NzDemoResultFotComponent } from './fot';
import { NzDemoResultInfoComponent } from './info';
import { NzDemoResultSuccessComponent } from './success';
import { NzDemoResultWarningComponent } from './warning';
import { NzDemoResultZhComponent } from './zh.component';
import { NzDemoResultEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoResultEnComponent },
      { path: 'zh', component: NzDemoResultZhComponent }
    ])
  ],
  declarations: [
		NzDemoResultCustomComponent,
		NzDemoResultErrorComponent,
		NzDemoResultFofComponent,
		NzDemoResultFooComponent,
		NzDemoResultFotComponent,
		NzDemoResultInfoComponent,
		NzDemoResultSuccessComponent,
		NzDemoResultWarningComponent,
		NzDemoResultZhComponent,
		NzDemoResultEnComponent,

  ]
})
export class NzDemoResultModule {

}
