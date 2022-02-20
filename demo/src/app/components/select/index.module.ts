import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoSelectAutomaticTokenizationComponent } from './automatic-tokenization';
import { NzDemoSelectBasicComponent } from './basic';
import { NzDemoSelectBigDataComponent } from './big-data';
import { NzDemoSelectBorderLessComponent } from './border-less';
import { NzDemoSelectCoordinateComponent } from './coordinate';
import { NzDemoSelectCustomContentComponent } from './custom-content';
import { NzDemoSelectCustomDropdownMenuComponent } from './custom-dropdown-menu';
import { NzDemoSelectCustomTemplateComponent } from './custom-template';
import { NzDemoSelectDefaultValueComponent } from './default-value';
import { NzDemoSelectHideSelectedComponent } from './hide-selected';
import { NzDemoSelectLabelInValueComponent } from './label-in-value';
import { NzDemoSelectMultipleComponent } from './multiple';
import { NzDemoSelectOptgroupComponent } from './optgroup';
import { NzDemoSelectScrollLoadComponent } from './scroll-load';
import { NzDemoSelectSearchBoxComponent } from './search-box';
import { NzDemoSelectSearchComponent } from './search';
import { NzDemoSelectSelectUsersComponent } from './select-users';
import { NzDemoSelectSizeComponent } from './size';
import { NzDemoSelectTagsComponent } from './tags';
import { NzDemoSelectZhComponent } from './zh.component';
import { NzDemoSelectEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoSelectEnComponent },
      { path: 'zh', component: NzDemoSelectZhComponent }
    ])
  ],
  declarations: [
		NzDemoSelectAutomaticTokenizationComponent,
		NzDemoSelectBasicComponent,
		NzDemoSelectBigDataComponent,
		NzDemoSelectBorderLessComponent,
		NzDemoSelectCoordinateComponent,
		NzDemoSelectCustomContentComponent,
		NzDemoSelectCustomDropdownMenuComponent,
		NzDemoSelectCustomTemplateComponent,
		NzDemoSelectDefaultValueComponent,
		NzDemoSelectHideSelectedComponent,
		NzDemoSelectLabelInValueComponent,
		NzDemoSelectMultipleComponent,
		NzDemoSelectOptgroupComponent,
		NzDemoSelectScrollLoadComponent,
		NzDemoSelectSearchBoxComponent,
		NzDemoSelectSearchComponent,
		NzDemoSelectSelectUsersComponent,
		NzDemoSelectSizeComponent,
		NzDemoSelectTagsComponent,
		NzDemoSelectZhComponent,
		NzDemoSelectEnComponent,

  ]
})
export class NzDemoSelectModule {

}
