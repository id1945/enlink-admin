import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoInputAddonComponent } from './addon';
import { NzDemoInputAllowClearComponent } from './allow-clear';
import { NzDemoInputAutosizeTextareaComponent } from './autosize-textarea';
import { NzDemoInputBasicComponent } from './basic';
import { NzDemoInputGroupComponent } from './group';
import { NzDemoInputPasswordInputComponent } from './password-input';
import { NzDemoInputPresuffixComponent } from './presuffix';
import { NzDemoInputSearchInputComponent } from './search-input';
import { NzDemoInputSizeComponent } from './size';
import { NzDemoInputTextareaComponent } from './textarea';
import { NzDemoInputTooltipComponent } from './tooltip';
import { NzDemoInputZhComponent } from './zh.component';
import { NzDemoInputEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoInputEnComponent },
      { path: 'zh', component: NzDemoInputZhComponent }
    ])
  ],
  declarations: [
		NzDemoInputAddonComponent,
		NzDemoInputAllowClearComponent,
		NzDemoInputAutosizeTextareaComponent,
		NzDemoInputBasicComponent,
		NzDemoInputGroupComponent,
		NzDemoInputPasswordInputComponent,
		NzDemoInputPresuffixComponent,
		NzDemoInputSearchInputComponent,
		NzDemoInputSizeComponent,
		NzDemoInputTextareaComponent,
		NzDemoInputTooltipComponent,
		NzDemoInputZhComponent,
		NzDemoInputEnComponent,

  ]
})
export class NzDemoInputModule {

}
