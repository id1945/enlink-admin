import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoFormAdvancedSearchComponent } from './advanced-search';
import { NzDemoFormAutoTipsComponent } from './auto-tips';
import { NzDemoFormCoordinatedComponent } from './coordinated';
import { NzDemoFormDynamicFormItemComponent } from './dynamic-form-item';
import { NzDemoFormDynamicRuleComponent } from './dynamic-rule';
import { NzDemoFormHorizontalLoginComponent } from './horizontal-login';
import { NzDemoFormLayoutComponent } from './layout';
import { NzDemoFormNormalLoginComponent } from './normal-login';
import { NzDemoFormRegisterComponent } from './register';
import { NzDemoFormTimeRelatedControlsComponent } from './time-related-controls';
import { NzDemoFormValidateReactiveComponent } from './validate-reactive';
import { NzDemoFormValidateStaticComponent } from './validate-static';
import { NzDemoFormValidateTemplateComponent } from './validate-template';
import { NzDemoFormZhComponent } from './zh.component';
import { NzDemoFormEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoFormEnComponent },
      { path: 'zh', component: NzDemoFormZhComponent }
    ])
  ],
  declarations: [
		NzDemoFormAdvancedSearchComponent,
		NzDemoFormAutoTipsComponent,
		NzDemoFormCoordinatedComponent,
		NzDemoFormDynamicFormItemComponent,
		NzDemoFormDynamicRuleComponent,
		NzDemoFormHorizontalLoginComponent,
		NzDemoFormLayoutComponent,
		NzDemoFormNormalLoginComponent,
		NzDemoFormRegisterComponent,
		NzDemoFormTimeRelatedControlsComponent,
		NzDemoFormValidateReactiveComponent,
		NzDemoFormValidateStaticComponent,
		NzDemoFormValidateTemplateComponent,
		NzDemoFormZhComponent,
		NzDemoFormEnComponent,

  ]
})
export class NzDemoFormModule {

}
