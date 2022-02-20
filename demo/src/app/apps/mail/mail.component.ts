import { Component } from '@angular/core';
import { AppsService } from '../../shared/services/apps.service';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { Mail } from '../../shared/interfaces/mail.type';

@Component({
    templateUrl: './mail.component.html'
})

export class MailComponent  {

    mails : Mail[];
    allChecked:boolean = false;
    indeterminate:boolean = false;
    isMailListOpen: boolean = true; 
    isNavOpen: boolean = false;
    isCompose: boolean = false;
    selectedMail: string = "";
    themeColors = this.colorConfig.get().colors;
    filter;

    colorRed = this.themeColors.red;
    colorBlue = this.themeColors.blue;
    colorCyan = this.themeColors.cyan;
    colorGold = this.themeColors.gold;
    colorVolcano = this.themeColors.volcano;

    constructor (private mailSvc: AppsService, private colorConfig : ThemeConstantService) {}

    ngOnInit(): void {
        this.mailSvc.getMailJson().subscribe(data => {
            this.mails = data;
        })
    }

    updateAllChecked(): void {
        this.indeterminate = false;
        if (this.allChecked) {
            this.mails.forEach(item => item.checked = true);
        } else {
            this.mails.forEach(item => item.checked = false);
        }
    }

    updateSingleChecked(): void {
        if (this.mails.every(item => item.checked === false)) {
            this.allChecked = false;
            this.indeterminate = false;
        } else if (this.mails.every(item => item.checked === true)) {
            this.allChecked = true;
            this.indeterminate = false;
        } else {
            this.indeterminate = true;
        }
    }

    formatBody = function(body:string) {
        return body.replace(/<(?:.|\n)*?>/gm, ' ');
    }

    openMail(mail: string) {
        this.selectedMail = mail;
        this.isMailListOpen = false;
    }

    closeMail() {
        this.selectedMail = '';
        this.isMailListOpen = true;
        this.isCompose = false;
    }

    openNav() {
        this.isNavOpen = !this.isNavOpen;
    }

    compose() {
        this.selectedMail = '';
        this.isMailListOpen = false;
        this.isCompose = true;
    }

    editorConfig = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],               
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],  
            [{ 'align': [] }],
            ['link', 'image']                        
        ]
    };
}