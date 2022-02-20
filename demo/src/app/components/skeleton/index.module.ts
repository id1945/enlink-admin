import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoSkeletonActiveComponent } from './active';
import { NzDemoSkeletonBasicComponent } from './basic';
import { NzDemoSkeletonChildrenComponent } from './children';
import { NzDemoSkeletonComplexComponent } from './complex';
import { NzDemoSkeletonElementComponent } from './element';
import { NzDemoSkeletonListComponent } from './list';
import { NzDemoSkeletonZhComponent } from './zh.component';
import { NzDemoSkeletonEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoSkeletonEnComponent },
      { path: 'zh', component: NzDemoSkeletonZhComponent }
    ])
  ],
  declarations: [
		NzDemoSkeletonActiveComponent,
		NzDemoSkeletonBasicComponent,
		NzDemoSkeletonChildrenComponent,
		NzDemoSkeletonComplexComponent,
		NzDemoSkeletonElementComponent,
		NzDemoSkeletonListComponent,
		NzDemoSkeletonZhComponent,
		NzDemoSkeletonEnComponent,

  ]
})
export class NzDemoSkeletonModule {

}
