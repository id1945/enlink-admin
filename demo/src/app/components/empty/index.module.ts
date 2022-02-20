import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoEmptyBasicComponent } from './basic';
import { NzDemoEmptyConfigComponent } from './config';
import { NzDemoEmptyCustomizeComponent } from './customize';
import { NzDemoEmptyDescriptionComponent } from './description';
import { NzDemoEmptySimpleComponent } from './simple';
import { NzDemoEmptyZhComponent } from './zh.component';
import { NzDemoEmptyEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoEmptyEnComponent },
      { path: 'zh', component: NzDemoEmptyZhComponent }
    ])
  ],
  declarations: [
		NzDemoEmptyBasicComponent,
		NzDemoEmptyConfigComponent,
		NzDemoEmptyCustomizeComponent,
		NzDemoEmptyDescriptionComponent,
		NzDemoEmptySimpleComponent,
		NzDemoEmptyZhComponent,
		NzDemoEmptyEnComponent,

  ]
})
export class NzDemoEmptyModule {

}
