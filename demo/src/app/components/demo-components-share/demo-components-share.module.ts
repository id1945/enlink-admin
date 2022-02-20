import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { QuicklinkModule } from 'ngx-quicklink';
import { NzCodeBoxModule } from '../../shared/components/codebox/codebox.module';
import { NzHighlightModule } from '../../shared/components/highlight/highlight.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzCodeBoxModule,
    NzHighlightModule,
    NzToolTipModule,
    NzAnchorModule,
    NzAffixModule,
    NzGridModule,
    // third libs
    DragDropModule,
    QuicklinkModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzCodeBoxModule,
    NzHighlightModule,
    NzAnchorModule,
    NzAffixModule,
    NzGridModule,
    NzToolTipModule,
    // third libs
    ScrollingModule,
    DragDropModule,
    QuicklinkModule
  ]
})
export class DemoComponentsShareModule {
}
