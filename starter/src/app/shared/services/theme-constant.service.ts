import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeConstantService {
    
    // Theme Config
    isMenuFolded: boolean = false
    isSideNavDark: boolean = false;
    headerColor: string = 'default';
    private colorConfig: any = {
        colors: {
            magenta: '#eb2f96',
            magentaLight: 'rgba(235, 47, 150, 0.05)',
            red: '#de4436',
            redLight: 'rgba(222, 68, 54, 0.05)',
            volcano: '#fa541c',
            volcanoLight: 'rgba(250, 84, 28, 0.05)',
            orange: '#fa8c16',
            orangeLight: 'rgba(250, 140, 22, 0.1)',
            gold: '#ffc107',
            goldLight: 'rgba(255, 193, 7, 0.1)',
            lime: '#a0d911',
            limeLight: 'rgba(160, 217, 17, 0.1)',
            green: '#52c41a',
            greenLight: 'rgba(82, 196, 26, 0.1)',
            cyan: "#05c9a7",
            cyanLight: 'rgba(0, 201, 167, 0.1)',
            blue: '#3f87f5',
            blueLight: 'rgba(63, 135, 245, 0.15)',
            geekBlue: '#2f54eb',
            geekBlueLight: 'rgba(47, 84, 235, 0.1)',
            purple: '#886cff',
            purpleLight: 'rgba(136, 108, 255, 0.1)',
            gray: '#53535f',
            grayLight: '#77838f',
            grayLighter: '#ededed',
            grayLightest: '#f1f2f3',
            border: '#edf2f9',
            white: '#ffffff',
            dark: '#2a2a2a',
            transparent: 'rgba(255, 255, 255, 0)'
        }
    };

    private isMenuFoldedActived = new BehaviorSubject<boolean>(this.isMenuFolded);
    isMenuFoldedChanges: Observable<boolean> = this.isMenuFoldedActived.asObservable();

    private isSideNavDarkActived = new BehaviorSubject<boolean>(this.isSideNavDark);
    isSideNavDarkChanges: Observable<boolean> = this.isSideNavDarkActived.asObservable();

    private isExpandActived = new BehaviorSubject<boolean>(false);
    isExpandChanges: Observable<boolean> = this.isExpandActived.asObservable();

    private currentHeaderColor = new BehaviorSubject(this.headerColor);
    selectedHeaderColor = this.currentHeaderColor.asObservable();

    get() {
        return this.colorConfig;
    }

    toggleFold(isFolded: boolean) {
        this.isMenuFoldedActived.next(isFolded);
    }

    toogleSideNavDark(isDark:boolean) {
        this.isSideNavDarkActived.next(isDark);
    }

    toggleExpand(isExpand:boolean) {
        this.isExpandActived.next(isExpand);
    }

    changeHeaderColor(color: string) {
        this.currentHeaderColor.next(color)
    }
}