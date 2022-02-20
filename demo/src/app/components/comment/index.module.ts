import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCommentBasicComponent } from './basic';
import { NzDemoCommentEditorComponent } from './editor';
import { NzDemoCommentListComponent } from './list';
import { NzDemoCommentNestedComponent } from './nested';
import { NzDemoCommentZhComponent } from './zh.component';
import { NzDemoCommentEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCommentEnComponent },
      { path: 'zh', component: NzDemoCommentZhComponent }
    ])
  ],
  declarations: [
		NzDemoCommentBasicComponent,
		NzDemoCommentEditorComponent,
		NzDemoCommentListComponent,
		NzDemoCommentNestedComponent,
		NzDemoCommentZhComponent,
		NzDemoCommentEnComponent,

  ]
})
export class NzDemoCommentModule {

}
