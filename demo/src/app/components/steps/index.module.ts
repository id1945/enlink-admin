import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoStepsClickableComponent } from './clickable';
import { NzDemoStepsCustomizedProgressDotComponent } from './customized-progress-dot';
import { NzDemoStepsErrorComponent } from './error';
import { NzDemoStepsIconComponent } from './icon';
import { NzDemoStepsNavComponent } from './nav';
import { NzDemoStepsProgressDotComponent } from './progress-dot';
import { NzDemoStepsSimpleComponent } from './simple';
import { NzDemoStepsSmallSizeComponent } from './small-size';
import { NzDemoStepsStartIndexComponent } from './start-index';
import { NzDemoStepsStepNextComponent } from './step-next';
import { NzDemoStepsVerticalSmallComponent } from './vertical-small';
import { NzDemoStepsVerticalComponent } from './vertical';
import { NzDemoStepsZhComponent } from './zh.component';
import { NzDemoStepsEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoStepsEnComponent },
      { path: 'zh', component: NzDemoStepsZhComponent }
    ])
  ],
  declarations: [
		NzDemoStepsClickableComponent,
		NzDemoStepsCustomizedProgressDotComponent,
		NzDemoStepsErrorComponent,
		NzDemoStepsIconComponent,
		NzDemoStepsNavComponent,
		NzDemoStepsProgressDotComponent,
		NzDemoStepsSimpleComponent,
		NzDemoStepsSmallSizeComponent,
		NzDemoStepsStartIndexComponent,
		NzDemoStepsStepNextComponent,
		NzDemoStepsVerticalSmallComponent,
		NzDemoStepsVerticalComponent,
		NzDemoStepsZhComponent,
		NzDemoStepsEnComponent,

  ]
})
export class NzDemoStepsModule {

}
