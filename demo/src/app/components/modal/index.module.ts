import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoModalAsyncComponent } from './async';
import { NzDemoModalBasicComponent } from './basic';
import { NzDemoModalConfirmPromiseComponent } from './confirm-promise';
import { NzDemoModalConfirmComponent } from './confirm';
import { NzDemoModalFooterComponent } from './footer';
import { NzDemoModalFooter2Component, NzModalCustomFooterComponent } from './footer2';
import { NzDemoModalInfoComponent } from './info';
import { NzDemoModalLocaleComponent } from './locale';
import { NzDemoModalManualComponent } from './manual';
import { NzDemoModalPositionComponent } from './position';
import { NzDemoModalServiceComponent, NzModalCustomComponent } from './service';
import { NzDemoModalZhComponent } from './zh.component';
import { NzDemoModalEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoModalEnComponent },
      { path: 'zh', component: NzDemoModalZhComponent }
    ])
  ],
  declarations: [
		NzDemoModalAsyncComponent,
		NzDemoModalBasicComponent,
		NzDemoModalConfirmPromiseComponent,
		NzDemoModalConfirmComponent,
		NzDemoModalFooterComponent,
		NzDemoModalFooter2Component,
	NzModalCustomFooterComponent,
		NzDemoModalInfoComponent,
		NzDemoModalLocaleComponent,
		NzDemoModalManualComponent,
		NzDemoModalPositionComponent,
		NzDemoModalServiceComponent,
	NzModalCustomComponent,
		NzDemoModalZhComponent,
		NzDemoModalEnComponent,

  ]
})
export class NzDemoModalModule {

}
