import { Component } from '@angular/core'
import { ThemeConstantService } from '../../shared/services/theme-constant.service';

@Component({
    templateUrl: './e-commerce-dashboard.component.html'
})

export class EcommerceDashboardComponent {

    themeColors = this.colorConfig.get().colors;
    blue = this.themeColors.blue;
    blueLight = this.themeColors.blueLight;
    cyan = this.themeColors.cyan;
    cyanLight = this.themeColors.cyanLight;
    gold = this.themeColors.gold;
    purple = this.themeColors.purple;
    purpleLight = this.themeColors.purpleLight;
    red = this.themeColors.red;

    constructor( private colorConfig:ThemeConstantService ) {}

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
            backgroundColor: this.themeColors.blue,
            borderWidth: 0
        },
        { 
            backgroundColor: this.themeColors.blueLight,
            borderWidth: 0
        }
    ];
    salesChartData: any[] = [
        { 
            data: [20, 30, 35, 45, 55, 45],
            label: 'Online',
            categoryPercentage: 0.35,
            barPercentage: 0.70
        },
        { 
            data: [25, 35, 40, 50, 60, 50],
            label: 'Offline',
            categoryPercentage: 0.35,
            barPercentage: 0.70
        }
    ];

    revenueChartFormat: string = 'revenueMonth';

    revenueChartData: Array<any> = [{ 
        data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],
        label: 'Series A' 
    }];
    currentrevenueChartLabelsIdx = 1;
    revenueChartLabels:Array<any> = ["16th", "17th", "18th", "19th", "20th", "21th", "22th", "23th", "24th", "25th", "26th"];
    revenueChartOptions: any = {
        maintainAspectRatio: false,
        responsive: true,
        hover: {
            mode: 'nearest',
            intersect: true
        },
        tooltips: {
            mode: 'index'
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
    revenueChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.transparent,
            borderColor: this.cyan,
            pointBackgroundColor: this.cyan,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.cyanLight,
            pointHoverBorderColor: this.cyanLight
        }
    ];
    revenueChartType = 'line';

    customersChartLabels: string[] = ['Direct', 'Referral', 'Social Network'];
    customersChartData: number[] = [350, 450, 100];
    customersChartColors: Array<any> =  [{ 
        backgroundColor: [this.gold, this.blue, this.red],
        pointBackgroundColor : [this.gold, this.blue, this.red]
    }];
    customersChartOptions: any = {
        cutoutPercentage: 80,
        maintainAspectRatio: false
    }
    customersChartType = 'doughnut';

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
        },
        {
            id: 5311,
            name: 'Riley Newman',
            avatar: 'assets/images/avatars/thumb-6.jpg',
            date: '19 April 2019',
            amount: 872,
            status: 'rejected',
            checked : false
        }
    ]    

    productsList = [
        {
            name: 'Gray Sofa',
            avatar: 'assets/images/others/thumb-9.jpg',
            category: 'Home Decoration',
            growth: 18.3
        },
        {
            name: 'Beat Headphone',
            avatar: 'assets/images/others/thumb-10.jpg',
            category: 'Eletronic',
            growth: 12.7
        },
        {
            name: 'Wooden Rhino',
            avatar: 'assets/images/others/thumb-11.jpg',
            category: 'Home Decoration',
            growth: 9.2
        },
        {
            name: 'Red Chair',
            avatar: 'assets/images/others/thumb-12.jpg',
            category: 'Home Decoration',
            growth: 7.7
        },
        {
            name: 'Wristband',
            avatar: 'assets/images/others/thumb-13.jpg',
            category: 'Eletronic',
            growth: 5.8
        }
    ]    
}    