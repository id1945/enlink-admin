import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { moduleList } from './module';

import { NzDemoTableAjaxComponent } from './ajax';
import { NzDemoTableBasicComponent } from './basic';
import { NzDemoTableBorderedComponent } from './bordered';
import { NzDemoTableBreakWordComponent } from './break-word';
import { NzDemoTableColspanRowspanComponent } from './colspan-rowspan';
import { NzDemoTableCustomFilterPanelComponent } from './custom-filter-panel';
import { NzDemoTableDragSortingComponent } from './drag-sorting';
import { NzDemoTableDynamicSettingsComponent } from './dynamic-settings';
import { NzDemoTableEditCellComponent } from './edit-cell';
import { NzDemoTableEditRowComponent } from './edit-row';
import { NzDemoTableEllipsisComponent } from './ellipsis';
import { NzDemoTableExpandChildrenComponent } from './expand-children';
import { NzDemoTableExpandComponent } from './expand';
import { NzDemoTableFixedColumnsHeaderComponent } from './fixed-columns-header';
import { NzDemoTableFixedColumnsComponent } from './fixed-columns';
import { NzDemoTableFixedHeaderComponent } from './fixed-header';
import { NzDemoTableGroupingColumnsComponent } from './grouping-columns';
import { NzDemoTableMultipleSorterComponent } from './multiple-sorter';
import { NzDemoTableNestedTableComponent } from './nested-table';
import { NzDemoTableResetFilterComponent } from './reset-filter';
import { NzDemoTableRowSelectionAndOperationComponent } from './row-selection-and-operation';
import { NzDemoTableRowSelectionCustomComponent } from './row-selection-custom';
import { NzDemoTableSizeComponent } from './size';
import { NzDemoTableSortFilterComponent } from './sort-filter';
import { NzDemoTableTemplateComponent } from './template';
import { NzDemoTableVirtualComponent } from './virtual';
import { NzDemoTableZhComponent } from './zh.component';
import { NzDemoTableEnComponent } from './en.component';


@NgModule({
  imports     : [
    DemoComponentsShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NzDemoTableEnComponent },
      { path: 'zh', component: NzDemoTableZhComponent }
    ])
  ],
  declarations: [
		NzDemoTableAjaxComponent,
		NzDemoTableBasicComponent,
		NzDemoTableBorderedComponent,
		NzDemoTableBreakWordComponent,
		NzDemoTableColspanRowspanComponent,
		NzDemoTableCustomFilterPanelComponent,
		NzDemoTableDragSortingComponent,
		NzDemoTableDynamicSettingsComponent,
		NzDemoTableEditCellComponent,
		NzDemoTableEditRowComponent,
		NzDemoTableEllipsisComponent,
		NzDemoTableExpandChildrenComponent,
		NzDemoTableExpandComponent,
		NzDemoTableFixedColumnsHeaderComponent,
		NzDemoTableFixedColumnsComponent,
		NzDemoTableFixedHeaderComponent,
		NzDemoTableGroupingColumnsComponent,
		NzDemoTableMultipleSorterComponent,
		NzDemoTableNestedTableComponent,
		NzDemoTableResetFilterComponent,
		NzDemoTableRowSelectionAndOperationComponent,
		NzDemoTableRowSelectionCustomComponent,
		NzDemoTableSizeComponent,
		NzDemoTableSortFilterComponent,
		NzDemoTableTemplateComponent,
		NzDemoTableVirtualComponent,
		NzDemoTableZhComponent,
		NzDemoTableEnComponent,

  ]
})
export class NzDemoTableModule {

}
