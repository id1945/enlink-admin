import { Component, TemplateRef } from '@angular/core';
import { AppsService } from '../../../shared/services/apps.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProjectList } from '../../../shared/interfaces/project-list.type';
import { TableService } from '../../../shared/services/table.service';

@Component({
    templateUrl: './project-list.component.html'
})

export class ProjectListComponent  {

    view: string = 'cardView';
    newProject: boolean = false;
    projectListRaw: ProjectList[];
    projectList: ProjectList[];
    searchInput: string;

    constructor (private projectListSvc: AppsService, private modalService: NzModalService, private tablesvc : TableService) {}

    ngOnInit(): void {
        this.projectListSvc.getProjectListJson().subscribe(data => {
            this.projectListRaw = data;
            this.projectList = data;
        })
    }

    search() {
        const data = this.projectListRaw
        this.projectList = this.tablesvc.search(this.searchInput, data )
    }

    showNewProject(newProjectContent: TemplateRef<{}>) {
        const modal = this.modalService.create({
            nzTitle: 'Create New Project',
            nzContent: newProjectContent,
            nzFooter: [
                {
                    label: 'Create Project',
                    type: 'primary',
                    onClick: () => this.modalService.confirm(
                        { 
                            nzTitle: 'Are you sure you want to create this project?',
                            nzOnOk: () => this.modalService.closeAll()
                        }
                    )
                },
            ],
            nzWidth: 800
        })    
    }

}