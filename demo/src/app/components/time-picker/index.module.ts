import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTimePickerAddonComponent } from './addon';
import { NzDemoTimePickerBasicComponent } from './basic';
import { NzDemoTimePickerDisabledPartComponent } from './disabled-part';
import { NzDemoTimePickerDisabledComponent } from './disabled';
import { NzDemoTimePickerHideColumnComponent } from './hide-column';
import { NzDemoTimePickerIntervalOptionsComponent } from './interval-options';
import { NzDemoTimePickerSizeComponent } from './size';
import { NzDemoTimePickerUse12HoursComponent } from './use12-hours';
import { NzDemoTimePickerValueComponent } from './value';
import { NzDemoTimePickerZhComponent } from './zh.component';
import { NzDemoTimePickerEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTimePickerEnComponent },
      { path: 'zh', component: NzDemoTimePickerZhComponent }
    ])
  ],
  declarations: [
		NzDemoTimePickerAddonComponent,
		NzDemoTimePickerBasicComponent,
		NzDemoTimePickerDisabledPartComponent,
		NzDemoTimePickerDisabledComponent,
		NzDemoTimePickerHideColumnComponent,
		NzDemoTimePickerIntervalOptionsComponent,
		NzDemoTimePickerSizeComponent,
		NzDemoTimePickerUse12HoursComponent,
		NzDemoTimePickerValueComponent,
		NzDemoTimePickerZhComponent,
		NzDemoTimePickerEnComponent,

  ]
})
export class NzDemoTimePickerModule {

}
