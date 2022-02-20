import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTransferAdvancedComponent } from './advanced';
import { NzDemoTransferBasicComponent } from './basic';
import { NzDemoTransferCanMoveComponent } from './can-move';
import { NzDemoTransferCustomItemComponent } from './custom-item';
import { NzDemoTransferSearchComponent } from './search';
import { NzDemoTransferTableTransferComponent } from './table-transfer';
import { NzDemoTransferTreeTransferComponent } from './tree-transfer';
import { NzDemoTransferZhComponent } from './zh.component';
import { NzDemoTransferEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTransferEnComponent },
      { path: 'zh', component: NzDemoTransferZhComponent }
    ])
  ],
  declarations: [
		NzDemoTransferAdvancedComponent,
		NzDemoTransferBasicComponent,
		NzDemoTransferCanMoveComponent,
		NzDemoTransferCustomItemComponent,
		NzDemoTransferSearchComponent,
		NzDemoTransferTableTransferComponent,
		NzDemoTransferTreeTransferComponent,
		NzDemoTransferZhComponent,
		NzDemoTransferEnComponent,

  ]
})
export class NzDemoTransferModule {

}
