import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTreeBasicControlledComponent } from './basic-controlled';
import { NzDemoTreeBasicComponent } from './basic';
import { NzDemoTreeCustomizedIconComponent } from './customized-icon';
import { NzDemoTreeDirectoryComponent } from './directory';
import { NzDemoTreeDraggableConfirmComponent } from './draggable-confirm';
import { NzDemoTreeDraggableComponent } from './draggable';
import { NzDemoTreeDynamicComponent } from './dynamic';
import { NzDemoTreeLineComponent } from './line';
import { NzDemoTreeSearchComponent } from './search';
import { NzDemoTreeVirtualScrollComponent } from './virtual-scroll';
import { NzDemoTreeZhComponent } from './zh.component';
import { NzDemoTreeEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTreeEnComponent },
      { path: 'zh', component: NzDemoTreeZhComponent }
    ])
  ],
  declarations: [
		NzDemoTreeBasicControlledComponent,
		NzDemoTreeBasicComponent,
		NzDemoTreeCustomizedIconComponent,
		NzDemoTreeDirectoryComponent,
		NzDemoTreeDraggableConfirmComponent,
		NzDemoTreeDraggableComponent,
		NzDemoTreeDynamicComponent,
		NzDemoTreeLineComponent,
		NzDemoTreeSearchComponent,
		NzDemoTreeVirtualScrollComponent,
		NzDemoTreeZhComponent,
		NzDemoTreeEnComponent,

  ]
})
export class NzDemoTreeModule {

}
