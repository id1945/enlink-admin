import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoGridBasicComponent } from './basic';
import { NzDemoGridFlexAlignComponent } from './flex-align';
import { NzDemoGridFlexOrderComponent } from './flex-order';
import { NzDemoGridFlexStretchComponent } from './flex-stretch';
import { NzDemoGridFlexComponent } from './flex';
import { NzDemoGridGutterComponent } from './gutter';
import { NzDemoGridOffsetComponent } from './offset';
import { NzDemoGridPlaygroundComponent } from './playground';
import { NzDemoGridResponsiveMoreComponent } from './responsive-more';
import { NzDemoGridResponsiveComponent } from './responsive';
import { NzDemoGridSortComponent } from './sort';
import { NzDemoGridZhComponent } from './zh.component';
import { NzDemoGridEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoGridEnComponent },
      { path: 'zh', component: NzDemoGridZhComponent }
    ])
  ],
  declarations: [
		NzDemoGridBasicComponent,
		NzDemoGridFlexAlignComponent,
		NzDemoGridFlexOrderComponent,
		NzDemoGridFlexStretchComponent,
		NzDemoGridFlexComponent,
		NzDemoGridGutterComponent,
		NzDemoGridOffsetComponent,
		NzDemoGridPlaygroundComponent,
		NzDemoGridResponsiveMoreComponent,
		NzDemoGridResponsiveComponent,
		NzDemoGridSortComponent,
		NzDemoGridZhComponent,
		NzDemoGridEnComponent,

  ]
})
export class NzDemoGridModule {

}
