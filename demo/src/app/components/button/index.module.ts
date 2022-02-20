import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoButtonBasicComponent } from './basic';
import { NzDemoButtonBlockComponent } from './block';
import { NzDemoButtonButtonGroupComponent } from './button-group';
import { NzDemoButtonDangerComponent } from './danger';
import { NzDemoButtonDisabledComponent } from './disabled';
import { NzDemoButtonGhostComponent } from './ghost';
import { NzDemoButtonIconComponent } from './icon';
import { NzDemoButtonLoadingComponent } from './loading';
import { NzDemoButtonMultipleComponent } from './multiple';
import { NzDemoButtonSizeComponent } from './size';
import { NzDemoButtonZhComponent } from './zh.component';
import { NzDemoButtonEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoButtonEnComponent },
      { path: 'zh', component: NzDemoButtonZhComponent }
    ])
  ],
  declarations: [
		NzDemoButtonBasicComponent,
		NzDemoButtonBlockComponent,
		NzDemoButtonButtonGroupComponent,
		NzDemoButtonDangerComponent,
		NzDemoButtonDisabledComponent,
		NzDemoButtonGhostComponent,
		NzDemoButtonIconComponent,
		NzDemoButtonLoadingComponent,
		NzDemoButtonMultipleComponent,
		NzDemoButtonSizeComponent,
		NzDemoButtonZhComponent,
		NzDemoButtonEnComponent,

  ]
})
export class NzDemoButtonModule {

}
