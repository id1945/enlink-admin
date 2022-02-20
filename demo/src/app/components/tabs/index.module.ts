import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTabsBasicComponent } from './basic';
import { NzDemoTabsCardTopComponent } from './card-top';
import { NzDemoTabsCardComponent } from './card';
import { NzDemoTabsCustomAddTriggerComponent } from './custom-add-trigger';
import { NzDemoTabsDisabledComponent } from './disabled';
import { NzDemoTabsEditableCardComponent } from './editable-card';
import { NzDemoTabsExtraComponent } from './extra';
import { NzDemoTabsGuardComponent } from './guard';
import { NzDemoTabsIconComponent } from './icon';
import { NzDemoTabsLazyComponent, NzDemoTabContentLazyComponent, NzDemoTabContentEagerlyComponent } from './lazy';
import { NzDemoTabsLinkRouterComponent } from './link-router';
import { NzDemoTabsPositionComponent } from './position';
import { NzDemoTabsSizeComponent } from './size';
import { NzDemoTabsSlideComponent } from './slide';
import { NzDemoTabsZhComponent } from './zh.component';
import { NzDemoTabsEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTabsEnComponent },
      { path: 'zh', component: NzDemoTabsZhComponent }
    ])
  ],
  declarations: [
		NzDemoTabsBasicComponent,
		NzDemoTabsCardTopComponent,
		NzDemoTabsCardComponent,
		NzDemoTabsCustomAddTriggerComponent,
		NzDemoTabsDisabledComponent,
		NzDemoTabsEditableCardComponent,
		NzDemoTabsExtraComponent,
		NzDemoTabsGuardComponent,
		NzDemoTabsIconComponent,
		NzDemoTabsLazyComponent,
	NzDemoTabContentLazyComponent,
	NzDemoTabContentEagerlyComponent,
		NzDemoTabsLinkRouterComponent,
		NzDemoTabsPositionComponent,
		NzDemoTabsSizeComponent,
		NzDemoTabsSlideComponent,
		NzDemoTabsZhComponent,
		NzDemoTabsEnComponent,

  ]
})
export class NzDemoTabsModule {

}
