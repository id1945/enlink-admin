import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCarouselAutoplayComponent } from './autoplay';
import { NzDemoCarouselBasicComponent } from './basic';
import { NzDemoCarouselFadeComponent } from './fade';
import { NzDemoCarouselPositionComponent } from './position';
import { NzDemoCarouselZhComponent } from './zh.component';
import { NzDemoCarouselEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCarouselEnComponent },
      { path: 'zh', component: NzDemoCarouselZhComponent }
    ])
  ],
  declarations: [
		NzDemoCarouselAutoplayComponent,
		NzDemoCarouselBasicComponent,
		NzDemoCarouselFadeComponent,
		NzDemoCarouselPositionComponent,
		NzDemoCarouselZhComponent,
		NzDemoCarouselEnComponent,

  ]
})
export class NzDemoCarouselModule {

}
