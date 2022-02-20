import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoCascaderBasicComponent } from './basic';
import { NzDemoCascaderChangeOnFunctionComponent } from './change-on-function';
import { NzDemoCascaderChangeOnSelectComponent } from './change-on-select';
import { NzDemoCascaderCustomFieldNamesComponent } from './custom-field-names';
import { NzDemoCascaderCustomRenderComponent } from './custom-render';
import { NzDemoCascaderCustomTemplateComponent } from './custom-template';
import { NzDemoCascaderDefaultValueAndAsynOptionsComponent } from './default-value-and-asyn-options';
import { NzDemoCascaderDefaultValueAndLazyloadComponent } from './default-value-and-lazyload';
import { NzDemoCascaderDefaultValueComponent } from './default-value';
import { NzDemoCascaderDisabledComponent } from './disabled';
import { NzDemoCascaderHoverComponent } from './hover';
import { NzDemoCascaderLazyComponent } from './lazy';
import { NzDemoCascaderModalComponent } from './modal';
import { NzDemoCascaderReactiveFormComponent } from './reactive-form';
import { NzDemoCascaderSearchComponent } from './search';
import { NzDemoCascaderSizeComponent } from './size';
import { NzDemoCascaderTriggerActionComponent } from './trigger-action';
import { NzDemoCascaderTriggerComponent } from './trigger';
import { NzDemoCascaderZhComponent } from './zh.component';
import { NzDemoCascaderEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoCascaderEnComponent },
      { path: 'zh', component: NzDemoCascaderZhComponent }
    ])
  ],
  declarations: [
		NzDemoCascaderBasicComponent,
		NzDemoCascaderChangeOnFunctionComponent,
		NzDemoCascaderChangeOnSelectComponent,
		NzDemoCascaderCustomFieldNamesComponent,
		NzDemoCascaderCustomRenderComponent,
		NzDemoCascaderCustomTemplateComponent,
		NzDemoCascaderDefaultValueAndAsynOptionsComponent,
		NzDemoCascaderDefaultValueAndLazyloadComponent,
		NzDemoCascaderDefaultValueComponent,
		NzDemoCascaderDisabledComponent,
		NzDemoCascaderHoverComponent,
		NzDemoCascaderLazyComponent,
		NzDemoCascaderModalComponent,
		NzDemoCascaderReactiveFormComponent,
		NzDemoCascaderSearchComponent,
		NzDemoCascaderSizeComponent,
		NzDemoCascaderTriggerActionComponent,
		NzDemoCascaderTriggerComponent,
		NzDemoCascaderZhComponent,
		NzDemoCascaderEnComponent,

  ]
})
export class NzDemoCascaderModule {

}
