import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../../shared/components/codebox/codebox.component';

@Component({
  selector     : 'nz-demo-select',
  preserveWhitespaces: false,
  templateUrl  : './zh.html'
})
export class NzDemoSelectZhComponent {
  expanded = false;
  @ViewChildren(NzCodeBoxComponent) codeBoxes: QueryList<NzCodeBoxComponent>;

  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }

  expandAllCode(): void {
    this.expanded = !this.expanded;
    this.codeBoxes.forEach(code => {
      code.nzExpanded = this.expanded;
      code.expandCode(this.expanded);
      code.check();
    });
  }

}
