import { Component } from '@angular/core'
import { ThemeConstantService } from '../../shared/services/theme-constant.service';

@Component({
    templateUrl: './crm-dashboard.component.html'
})

export class CrmDashboardComponent {

    themeColors = this.colorConfig.get().colors;
    blue = this.themeColors.blue;
    blueLight = this.themeColors.blueLight;
    cyan = this.themeColors.cyan;
    cyanLight = this.themeColors.cyanLight;
    gold = this.themeColors.gold;
    purple = this.themeColors.purple;
    purpleLight = this.themeColors.purpleLight;
    red = this.themeColors.red;

    taskListIndex: number = 0;

    constructor( private colorConfig:ThemeConstantService ) {}

    starRating: number = 4.5;
    ratingChartFormat: string = 'revenueMonth';

    ratingChartData: Array<any> = [{ 
        data: [30, 60, 50, 85, 65, 75],
        label: 'Series A' 
    }];
    currentratingChartLabelsIdx = 1;
    ratingChartLabels:Array<any> = ["16th",  "18th",  "20th",  "22th",  "24th",  "26th"];
    ratingChartOptions: any = {
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
                tension: 0.2,
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
                display: false
            }],
        }
    };
    ratingChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.transparent,
            borderColor: this.blue,
            pointBackgroundColor: this.blue,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.blueLight,
            pointHoverBorderColor: this.blueLight
        }
    ];
    ratingChartType = 'line';

    salesChartOptions: any = {
        scaleShowVerticalLines: false,
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Month'
                },
                gridLines: false,
                ticks: {
                    display: true,
                    beginAtZero: true,
                    fontSize: 13,
                    padding: 10
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: 'Value'
                },
                gridLines: {
                    drawBorder: false,
                    offsetGridLines: false,
                    drawTicks: false,
                    borderDash: [3, 4],
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 4]
                },
                ticks: {
                    max: 80,                            
                    stepSize: 20,
                    display: true,
                    beginAtZero: true,
                    fontSize: 13,
                    padding: 10
                }
            }]
        }
    };
    salesChartLabels: string[] = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    salesChartType = 'bar';
    salesChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.purple,
            borderWidth: 0
        },
        { 
            backgroundColor: this.themeColors.purpleLight,
            borderWidth: 0
        }
    ];
    salesChartData: any[] = [
        { 
            data: [20, 30, 35, 45, 55, 45],
            label: 'Online',
            categoryPercentage: 0.35,
            barPercentage: 0.70,
        },
        { 
            data: [25, 35, 40, 50, 60, 50],
            label: 'Offline',
            categoryPercentage: 0.35,
            barPercentage: 0.70,
        }
    ];

    ordersList = [
        {
            id: 5331,
            name: 'Erin Gonzales',
            avatar: 'assets/images/avatars/thumb-1.jpg',
            date: '8 May 2019',
            amount: 137,
            status: 'approved',
            checked : false
        },
        {
            id: 5375,
            name: 'Darryl Day',
            avatar: 'assets/images/avatars/thumb-2.jpg',
            date: '6 May 2019',
            amount: 322,
            status: 'approved',
            checked : false
        },
        {
            id: 5762,
            name: 'Marshall Nichols',
            avatar: 'assets/images/avatars/thumb-3.jpg',
            date: '1 May 2019',
            amount: 543,
            status: 'approved',
            checked : false
        },
        {
            id: 5865,
            name: 'Virgil Gonzales',
            avatar: 'assets/images/avatars/thumb-4.jpg',
            date: '28 April 2019',
            amount: 876,
            status: 'pending',
            checked : false
        },
        {
            id: 5213,
            name: 'Nicole Wyne',
            avatar: 'assets/images/avatars/thumb-5.jpg',
            date: '28 April 2019',
            amount: 241,
            status: 'approved',
            checked : false
        }
    ]   

    summaryFormat = () => `$3,531`;
}   