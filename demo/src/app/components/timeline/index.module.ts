import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTimelineAlternateComponent } from './alternate';
import { NzDemoTimelineBasicComponent } from './basic';
import { NzDemoTimelineColorComponent } from './color';
import { NzDemoTimelineCustomComponent } from './custom';
import { NzDemoTimelinePendingComponent } from './pending';
import { NzDemoTimelineRightComponent } from './right';
import { NzDemoTimelineZhComponent } from './zh.component';
import { NzDemoTimelineEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTimelineEnComponent },
      { path: 'zh', component: NzDemoTimelineZhComponent }
    ])
  ],
  declarations: [
		NzDemoTimelineAlternateComponent,
		NzDemoTimelineBasicComponent,
		NzDemoTimelineColorComponent,
		NzDemoTimelineCustomComponent,
		NzDemoTimelinePendingComponent,
		NzDemoTimelineRightComponent,
		NzDemoTimelineZhComponent,
		NzDemoTimelineEnComponent,

  ]
})
export class NzDemoTimelineModule {

}
