import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoAutoCompleteBasicComponent } from './basic';
import { NzDemoAutoCompleteCertainCategoryComponent } from './certain-category';
import { NzDemoAutoCompleteCustomComponent } from './custom';
import { NzDemoAutoCompleteNonCaseSensitiveComponent } from './non-case-sensitive';
import { NzDemoAutoCompleteOptionsComponent } from './options';
import { NzDemoAutoCompleteUncertainCategoryComponent } from './uncertain-category';
import { NzDemoAutoCompleteZhComponent } from './zh.component';
import { NzDemoAutoCompleteEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoAutoCompleteEnComponent },
      { path: 'zh', component: NzDemoAutoCompleteZhComponent }
    ])
  ],
  declarations: [
		NzDemoAutoCompleteBasicComponent,
		NzDemoAutoCompleteCertainCategoryComponent,
		NzDemoAutoCompleteCustomComponent,
		NzDemoAutoCompleteNonCaseSensitiveComponent,
		NzDemoAutoCompleteOptionsComponent,
		NzDemoAutoCompleteUncertainCategoryComponent,
		NzDemoAutoCompleteZhComponent,
		NzDemoAutoCompleteEnComponent,

  ]
})
export class NzDemoAutoCompleteModule {

}
