import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoMentionAsyncComponent } from './async';
import { NzDemoMentionAvatarComponent } from './avatar';
import { NzDemoMentionBasicComponent } from './basic';
import { NzDemoMentionControlledComponent } from './controlled';
import { NzDemoMentionCustomTagComponent } from './custom-tag';
import { NzDemoMentionMultilinesComponent } from './multilines';
import { NzDemoMentionMultipleTriggerComponent } from './multiple-trigger';
import { NzDemoMentionPlacementComponent } from './placement';
import { NzDemoMentionPreviewComponent } from './preview';
import { NzDemoMentionReadonlyComponent } from './readonly';
import { NzDemoMentionZhComponent } from './zh.component';
import { NzDemoMentionEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoMentionEnComponent },
      { path: 'zh', component: NzDemoMentionZhComponent }
    ])
  ],
  declarations: [
		NzDemoMentionAsyncComponent,
		NzDemoMentionAvatarComponent,
		NzDemoMentionBasicComponent,
		NzDemoMentionControlledComponent,
		NzDemoMentionCustomTagComponent,
		NzDemoMentionMultilinesComponent,
		NzDemoMentionMultipleTriggerComponent,
		NzDemoMentionPlacementComponent,
		NzDemoMentionPreviewComponent,
		NzDemoMentionReadonlyComponent,
		NzDemoMentionZhComponent,
		NzDemoMentionEnComponent,

  ]
})
export class NzDemoMentionModule {

}
