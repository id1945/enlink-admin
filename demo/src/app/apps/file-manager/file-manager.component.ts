import { Component, TemplateRef  } from '@angular/core';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { AppsService } from '../../shared/services/apps.service';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown'

import { Files } from '../../shared/interfaces/file-manager.type';

@Component({
    templateUrl: './file-manager.component.html'
})

export class FileManagerComponent  {

    files : Files[];

    themeColors = this.colorConfig.get().colors;
    selectedFile: string = '';
    listView:boolean = false;
    isDetailsOpen: boolean = false;
    isNavOpen: boolean = false;

    colorRed = this.themeColors.red;
    colorBlue = this.themeColors.blue;
    colorCyan = this.themeColors.cyan;
    colorGold = this.themeColors.gold;
    colorVolcano = this.themeColors.volcano;
    colorPurple = this.themeColors.purple;

    

    constructor(
        private colorConfig : ThemeConstantService,
        private fileManagerSvc: AppsService,
        private nzContextMenuService: NzContextMenuService ) {
    }

    ngOnInit(): void {
        this.fileManagerSvc.getFileManagerJson().subscribe(data => {
            this.files = data;
        });
    }

    changeView() {
        this.listView = !this.listView;
    }

    contextMenu($event: MouseEvent, contextDropdownTpl: NzDropdownMenuComponent, selected: string): void {
        this.nzContextMenuService.create($event, contextDropdownTpl);
        this.selectedFile = selected;
        this.isDetailsOpen = true;
    }

    selectFile(selected: string) {
        this.selectedFile = selected;
        this.isDetailsOpen = true;
    }

    unselectFile() {
        this.selectedFile = '';
    }

    close(): void {
        this.nzContextMenuService.close();
    }

    closeContentDetails() {
        this.isDetailsOpen = false;
    }

    navToggler() {
        this.isNavOpen = !this.isNavOpen;
    }
}