import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCardBasicComponent } from './basic';
import { NzDemoCardBorderLessComponent } from './border-less';
import { NzDemoCardFlexibleContentComponent } from './flexible-content';
import { NzDemoCardGridCardComponent } from './grid-card';
import { NzDemoCardInColumnComponent } from './in-column';
import { NzDemoCardInnerComponent } from './inner';
import { NzDemoCardLoadingComponent } from './loading';
import { NzDemoCardMetaComponent } from './meta';
import { NzDemoCardSimpleComponent } from './simple';
import { NzDemoCardTabsComponent } from './tabs';
import { NzDemoCardZhComponent } from './zh.component';
import { NzDemoCardEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCardEnComponent },
      { path: 'zh', component: NzDemoCardZhComponent }
    ])
  ],
  declarations: [
		NzDemoCardBasicComponent,
		NzDemoCardBorderLessComponent,
		NzDemoCardFlexibleContentComponent,
		NzDemoCardGridCardComponent,
		NzDemoCardInColumnComponent,
		NzDemoCardInnerComponent,
		NzDemoCardLoadingComponent,
		NzDemoCardMetaComponent,
		NzDemoCardSimpleComponent,
		NzDemoCardTabsComponent,
		NzDemoCardZhComponent,
		NzDemoCardEnComponent,

  ]
})
export class NzDemoCardModule {

}
