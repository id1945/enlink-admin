import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoMenuHorizontalComponent } from './horizontal';
import { NzDemoMenuInlineCollapsedComponent } from './inline-collapsed';
import { NzDemoMenuInlineComponent } from './inline';
import { NzDemoMenuRecursiveComponent } from './recursive';
import { NzDemoMenuRouterComponent } from './router';
import { NzDemoMenuSiderCurrentComponent } from './sider-current';
import { NzDemoMenuSwitchModeComponent } from './switch-mode';
import { NzDemoMenuThemeComponent } from './theme';
import { NzDemoMenuVerticalComponent } from './vertical';
import { NzDemoMenuZhComponent } from './zh.component';
import { NzDemoMenuEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoMenuEnComponent },
      { path: 'zh', component: NzDemoMenuZhComponent }
    ])
  ],
  declarations: [
		NzDemoMenuHorizontalComponent,
		NzDemoMenuInlineCollapsedComponent,
		NzDemoMenuInlineComponent,
		NzDemoMenuRecursiveComponent,
		NzDemoMenuRouterComponent,
		NzDemoMenuSiderCurrentComponent,
		NzDemoMenuSwitchModeComponent,
		NzDemoMenuThemeComponent,
		NzDemoMenuVerticalComponent,
		NzDemoMenuZhComponent,
		NzDemoMenuEnComponent,

  ]
})
export class NzDemoMenuModule {

}
