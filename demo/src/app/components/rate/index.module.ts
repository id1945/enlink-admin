import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoRateBasicComponent } from './basic';
import { NzDemoRateCharacterComponent } from './character';
import { NzDemoRateClearComponent } from './clear';
import { NzDemoRateDisabledComponent } from './disabled';
import { NzDemoRateHalfComponent } from './half';
import { NzDemoRateTextComponent } from './text';
import { NzDemoRateZhComponent } from './zh.component';
import { NzDemoRateEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoRateEnComponent },
      { path: 'zh', component: NzDemoRateZhComponent }
    ])
  ],
  declarations: [
		NzDemoRateBasicComponent,
		NzDemoRateCharacterComponent,
		NzDemoRateClearComponent,
		NzDemoRateDisabledComponent,
		NzDemoRateHalfComponent,
		NzDemoRateTextComponent,
		NzDemoRateZhComponent,
		NzDemoRateEnComponent,

  ]
})
export class NzDemoRateModule {

}
