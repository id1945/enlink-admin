import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoInputNumberBasicComponent } from './basic';
import { NzDemoInputNumberDigitComponent } from './digit';
import { NzDemoInputNumberDisabledComponent } from './disabled';
import { NzDemoInputNumberFormatterComponent } from './formatter';
import { NzDemoInputNumberPrecisionComponent } from './precision';
import { NzDemoInputNumberSizeComponent } from './size';
import { NzDemoInputNumberZhComponent } from './zh.component';
import { NzDemoInputNumberEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoInputNumberEnComponent },
      { path: 'zh', component: NzDemoInputNumberZhComponent }
    ])
  ],
  declarations: [
		NzDemoInputNumberBasicComponent,
		NzDemoInputNumberDigitComponent,
		NzDemoInputNumberDisabledComponent,
		NzDemoInputNumberFormatterComponent,
		NzDemoInputNumberPrecisionComponent,
		NzDemoInputNumberSizeComponent,
		NzDemoInputNumberZhComponent,
		NzDemoInputNumberEnComponent,

  ]
})
export class NzDemoInputNumberModule {

}
