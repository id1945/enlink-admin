import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoRadioBasicComponent } from './basic';
import { NzDemoRadioDisableComponent } from './disable';
import { NzDemoRadioRadiobuttonComponent } from './radiobutton';
import { NzDemoRadioRadiogroupMoreComponent } from './radiogroup-more';
import { NzDemoRadioRadiogroupOptionsComponent } from './radiogroup-options';
import { NzDemoRadioRadiogroupWithNameComponent } from './radiogroup-with-name';
import { NzDemoRadioRadiogroupComponent } from './radiogroup';
import { NzDemoRadioSizeComponent } from './size';
import { NzDemoRadioSolidComponent } from './solid';
import { NzDemoRadioZhComponent } from './zh.component';
import { NzDemoRadioEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoRadioEnComponent },
      { path: 'zh', component: NzDemoRadioZhComponent }
    ])
  ],
  declarations: [
		NzDemoRadioBasicComponent,
		NzDemoRadioDisableComponent,
		NzDemoRadioRadiobuttonComponent,
		NzDemoRadioRadiogroupMoreComponent,
		NzDemoRadioRadiogroupOptionsComponent,
		NzDemoRadioRadiogroupWithNameComponent,
		NzDemoRadioRadiogroupComponent,
		NzDemoRadioSizeComponent,
		NzDemoRadioSolidComponent,
		NzDemoRadioZhComponent,
		NzDemoRadioEnComponent,

  ]
})
export class NzDemoRadioModule {

}
