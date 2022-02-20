import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTypographyBasicComponent } from './basic';
import { NzDemoTypographyEllipsisComponent } from './ellipsis';
import { NzDemoTypographyInteractiveComponent } from './interactive';
import { NzDemoTypographySuffixComponent } from './suffix';
import { NzDemoTypographyTextComponent } from './text';
import { NzDemoTypographyTitleComponent } from './title';
import { NzDemoTypographyZhComponent } from './zh.component';
import { NzDemoTypographyEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTypographyEnComponent },
      { path: 'zh', component: NzDemoTypographyZhComponent }
    ])
  ],
  declarations: [
		NzDemoTypographyBasicComponent,
		NzDemoTypographyEllipsisComponent,
		NzDemoTypographyInteractiveComponent,
		NzDemoTypographySuffixComponent,
		NzDemoTypographyTextComponent,
		NzDemoTypographyTitleComponent,
		NzDemoTypographyZhComponent,
		NzDemoTypographyEnComponent,

  ]
})
export class NzDemoTypographyModule {

}
