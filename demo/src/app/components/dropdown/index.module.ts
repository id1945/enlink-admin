import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoDropdownBasicComponent } from './basic';
import { NzDemoDropdownContextMenuComponent } from './context-menu';
import { NzDemoDropdownDropdownButtonComponent } from './dropdown-button';
import { NzDemoDropdownEventComponent } from './event';
import { NzDemoDropdownItemComponent } from './item';
import { NzDemoDropdownOverlayVisibleComponent } from './overlay-visible';
import { NzDemoDropdownPlacementComponent } from './placement';
import { NzDemoDropdownSubMenuComponent } from './sub-menu';
import { NzDemoDropdownTriggerComponent } from './trigger';
import { NzDemoDropdownZhComponent } from './zh.component';
import { NzDemoDropdownEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoDropdownEnComponent },
      { path: 'zh', component: NzDemoDropdownZhComponent }
    ])
  ],
  declarations: [
		NzDemoDropdownBasicComponent,
		NzDemoDropdownContextMenuComponent,
		NzDemoDropdownDropdownButtonComponent,
		NzDemoDropdownEventComponent,
		NzDemoDropdownItemComponent,
		NzDemoDropdownOverlayVisibleComponent,
		NzDemoDropdownPlacementComponent,
		NzDemoDropdownSubMenuComponent,
		NzDemoDropdownTriggerComponent,
		NzDemoDropdownZhComponent,
		NzDemoDropdownEnComponent,

  ]
})
export class NzDemoDropdownModule {

}
