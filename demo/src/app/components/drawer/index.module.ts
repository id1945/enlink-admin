import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoDrawerBasicRightComponent } from './basic-right';
import { NzDemoDrawerFromDrawerComponent } from './from-drawer';
import { NzDemoDrawerMultiLevelDrawerComponent } from './multi-level-drawer';
import { NzDemoDrawerPlacementComponent } from './placement';
import { NzDemoDrawerServiceComponent, NzDrawerCustomComponent } from './service';
import { NzDemoDrawerUserProfileComponent } from './user-profile';
import { NzDemoDrawerZhComponent } from './zh.component';
import { NzDemoDrawerEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoDrawerEnComponent },
      { path: 'zh', component: NzDemoDrawerZhComponent }
    ])
  ],
  declarations: [
		NzDemoDrawerBasicRightComponent,
		NzDemoDrawerFromDrawerComponent,
		NzDemoDrawerMultiLevelDrawerComponent,
		NzDemoDrawerPlacementComponent,
		NzDemoDrawerServiceComponent,
	NzDrawerCustomComponent,
		NzDemoDrawerUserProfileComponent,
		NzDemoDrawerZhComponent,
		NzDemoDrawerEnComponent,

  ]
})
export class NzDemoDrawerModule {

}
