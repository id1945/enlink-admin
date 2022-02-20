import { Component, ViewChild, ElementRef } from '@angular/core'
import { ThemeConstantService } from '../../shared/services/theme-constant.service';

@Component({
    templateUrl: './projects-dashboard.component.html',
    styles : [`
        @media only screen and (min-width: 992px) {
            .completion-chart {
                width: calc(100% - 330px);
            }
        }
    `]
})

export class ProjectsDashboardComponent {

    themeColors = this.colorConfig.get().colors;
    blue = this.themeColors.blue;
    blueLight = this.themeColors.blueLight;
    cyan = this.themeColors.cyan;
    cyanLight = this.themeColors.cyanLight;
    gold = this.themeColors.gold;
    purple = this.themeColors.purple;
    purpleLight = this.themeColors.purpleLight;
    red = this.themeColors.red;
    transparent = this.themeColors.transparent

    @ViewChild("completionChart", { static: true }) canvas: ElementRef;

    constructor( private colorConfig:ThemeConstantService ) {}

    ngOnInit(): void {
        let gradient = this.canvas.nativeElement.getContext('2d').createLinearGradient(0, 30, 10, 320);
        gradient.addColorStop(0, this.blueLight);
        gradient.addColorStop(1, this.transparent);
        this.completionChartColors = [
            {
                backgroundColor: gradient,
                borderColor: this.blue,
                pointBackgroundColor: this.blue,
                pointBorderColor: this.themeColors.white,
                pointHoverBackgroundColor: this.blueLight,
                pointHoverBorderColor: this.blueLight
            }
        ];
    }


    completionChartData: Array<any> = [{ 
        data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
        label: 'Series A' 
    }];
    currentcompletionChartLabelsIdx = 1;
    completionChartLabels:Array<any> = ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"];
    completionChartOptions: any = {
        maintainAspectRatio: false,
        responsive: true,
        hover: {
            mode: 'nearest',
            intersect: true
        },
        tooltips: {
            mode: 'index'
        },
        elements: {
            line: {
                tension: 0,
                borderWidth: 2
            }
        },
        scales: {
            xAxes: [{ 
                gridLines: [{
                    display: false,
                }],
                ticks: {
                    display: true,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    drawTicks: false,
                    borderDash: [3, 4],
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 4]  
                },
                ticks: {
                    display: true,
                    max: 100,                            
                    stepSize: 20,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }  
            }],
        }
    };
    completionChartColors;
    completionChartType = 'line';


    projectList = [
        {
            project: "Mind Cog App",
            avatar: "assets/images/others/thumb-1.jpg",
            status: "Ready",
            tasks: "31",
            progress: 100,
        },
        {
            project: "Mill Estate",
            avatar: "assets/images/others/thumb-2.jpg",
            status: "In Progress",
            tasks: "56",
            progress: 76
        },
        {
            project: "Eastern Sack",
            avatar: "assets/images/others/thumb-3.jpg",
            status: "In Progress",
            tasks: "21",
            progress: 87
        },
        {
            project: "Fortier Studio",
            avatar: "assets/images/others/thumb-5.jpg",
            status: "In Progress",
            tasks: "18",
            progress: 68
        },
        {
            project: "Indi Web",
            avatar: "assets/images/others/thumb-6.jpg",
            status: "Behind",
            tasks: "165",
            progress: 28
        }
    ]

    memberList = [
        {
            name: 'Erin Gonzales',
            img: 'assets/images/avatars/thumb-1.jpg',
            mail: 'erin.gon@gmail.com'
        },
        {
            name: 'Darryl Day',
            img: 'assets/images/avatars/thumb-2.jpg',
            mail: 'darryl.d@gmail.com'
        },
        {
            name: 'Marshall Nichols',
            img: 'assets/images/avatars/thumb-3.jpg',
            mail: 'marshalln@gmail.com'
        },
        {
            name: 'Virgil Gonzales',
            img: 'assets/images/avatars/thumb-4.jpg',
            mail: 'virgil14@gmail.com'
        },
        {
            name: 'Nicole Wyne',
            img: 'assets/images/avatars/thumb-5.jpg',
            mail: 'nicolew@gmail.com'
        },
        {
            name: 'Riley Newman',
            img: 'assets/images/avatars/thumb-6.jpg',
            mail: 'rileyn93@gmail.com'
        },
        {
            name: 'Pamela Wanda',
            img: 'assets/images/avatars/thumb-7.jpg',
            mail: 'pamelaw@gmail.com'
        }
    ]

    activityList = [
        {
            name: "Virgil Gonzales",
            date: "10:44 PM",
            action: "Complete task",
            target: "Prototype Design",
            actionType: "completed"
        },
        {
            name: "Marshall Nichols",
            date: "10:44 PM",
            action: "Complete task",
            target: "Documentation",
            actionType: "completed"
        },
        {
            name: "Virgil Gonzales",
            date: "8:34 PM",
            action: "Commented",
            target: "'That's not our work",
            actionType: "comment"
        },
        {
            name: "Pamela Wanda",
            date: "8:34 PM",
            action: "Removed",
            target: "a file",
            actionType: "removed"
        },
        {
            name: "Lilian Stone",
            date: "8:34 PM",
            action: "Attached file",
            target: "Mockup Zip",
            actionType: "upload"
        },
        {
            name: "Marshall Nichols",
            date: "10:44 PM",
            action: "Complete task",
            target: "UI Revamp",
            actionType: "completed"
        },
        {
            name: "Riley Newman",
            date: "8:34 PM",
            action: "Commented",
            target: "'Hi, please done this before tommorow'",
            actionType: "comment"
        },
        {
            name: "Erin Gonzales",
            date: "10:44 PM",
            action: "Complete task",
            target: "UI Revamp",
            actionType: "completed"
        },
        {
            name: "Pamela Wanda",
            date: "11:25 PM",
            action: "Complete task",
            target: "Clean Up Workspace",
            actionType: "completed"
        },
        {
            name: "Nicole Wyne",
            date: "8:25 PM",
            action: "Complete task",
            target: "Create Workspace",
            actionType: "completed"
        },
    ]   
    
    tasksList = [
        {
            name: 'Erin Gonzales',
            avatar: 'assets/images/avatars/thumb-1.jpg',
            due: '24 Mar, 2019',
            status: 'Medium',
            title: "Define users and workflow",
            desc: "A cheeseburger is more than sandwich"
        },
        {
            name: 'Virgil Gonzales',
            avatar: 'assets/images/avatars/thumb-4.jpg',
            due: '27 Mar, 2019',
            status: 'Medium',
            title: "Change interface",
            desc: "Efficiently unleash cross-media information",
        },
        {
            name: 'Nicole Wyne',
            avatar: 'assets/images/avatars/thumb-5.jpg',
            due: '29 Mar, 2019',
            status: 'Low',
            title: "Create databases",
            desc: "Here's the story of a man named Brady",
        },
        {
            name: 'Darryl Day',
            avatar: 'assets/images/avatars/thumb-2.jpg',
            due: '2 Apr, 2019',
            status: 'High',
            title: "Verify connectivity",
            desc: "Bugger bag egg's old boy willy jolly",
        },
        {
            name: 'Riley Newman',
            avatar: 'assets/images/avatars/thumb-6.jpg',
            due: '7 Apr, 2019',
            status: 'Medium',
            title: "Prepare implementation",
            desc: "Drop in axle roll-in rail slide",
        }
    ]
}