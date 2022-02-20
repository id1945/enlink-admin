import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoSliderBasicComponent } from './basic';
import { NzDemoSliderEventComponent } from './event';
import { NzDemoSliderIconSliderComponent } from './icon-slider';
import { NzDemoSliderInputNumberComponent } from './input-number';
import { NzDemoSliderMarkComponent } from './mark';
import { NzDemoSliderTipFormatterComponent } from './tip-formatter';
import { NzDemoSliderTooltipComponent } from './tooltip';
import { NzDemoSliderVerticalComponent } from './vertical';
import { NzDemoSliderZhComponent } from './zh.component';
import { NzDemoSliderEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoSliderEnComponent },
      { path: 'zh', component: NzDemoSliderZhComponent }
    ])
  ],
  declarations: [
		NzDemoSliderBasicComponent,
		NzDemoSliderEventComponent,
		NzDemoSliderIconSliderComponent,
		NzDemoSliderInputNumberComponent,
		NzDemoSliderMarkComponent,
		NzDemoSliderTipFormatterComponent,
		NzDemoSliderTooltipComponent,
		NzDemoSliderVerticalComponent,
		NzDemoSliderZhComponent,
		NzDemoSliderEnComponent,

  ]
})
export class NzDemoSliderModule {

}
