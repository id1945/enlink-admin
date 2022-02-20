import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoBadgeBasicComponent } from './basic';
import { NzDemoBadgeChangeComponent } from './change';
import { NzDemoBadgeColorfulComponent } from './colorful';
import { NzDemoBadgeDotComponent } from './dot';
import { NzDemoBadgeLinkComponent } from './link';
import { NzDemoBadgeNoWrapperComponent } from './no-wrapper';
import { NzDemoBadgeOverflowComponent } from './overflow';
import { NzDemoBadgeStatusComponent } from './status';
import { NzDemoBadgeZhComponent } from './zh.component';
import { NzDemoBadgeEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoBadgeEnComponent },
      { path: 'zh', component: NzDemoBadgeZhComponent }
    ])
  ],
  declarations: [
		NzDemoBadgeBasicComponent,
		NzDemoBadgeChangeComponent,
		NzDemoBadgeColorfulComponent,
		NzDemoBadgeDotComponent,
		NzDemoBadgeLinkComponent,
		NzDemoBadgeNoWrapperComponent,
		NzDemoBadgeOverflowComponent,
		NzDemoBadgeStatusComponent,
		NzDemoBadgeZhComponent,
		NzDemoBadgeEnComponent,

  ]
})
export class NzDemoBadgeModule {

}
