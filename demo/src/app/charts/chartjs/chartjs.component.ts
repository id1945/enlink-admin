import { Component, QueryList, ViewChildren } from '@angular/core';
import { ThemeConstantService } from '../../shared/services/theme-constant.service';
import { NzCodeBoxComponent } from '../../shared/components/codebox/codebox.component';

@Component({
    templateUrl: './chartjs.component.html'
})

export class ChartjsComponent {

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

    themeColors = this.colorConfig.get().colors;

    constructor( private colorConfig:ThemeConstantService ) {
    }

    ngOnInit() {
    }    

    // lineChart
    lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];
    currentLineChartLabelsIdx = 1;
    lineChartLabels:Array<any> = ["16th", "17th", "18th", "19th", "20th", "21th", "22th"];
    lineChartOptions: any = {
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
    lineChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.transparent,
            borderColor: this.themeColors.blue,
            pointBackgroundColor: this.themeColors.blue,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.themeColors.blueLight,
            pointHoverBorderColor: this.themeColors.blueLight
        },
        { 
            backgroundColor: this.themeColors.transparent,
            borderColor: this.themeColors.cyan,
            pointBackgroundColor: this.themeColors.cyan,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.themeColors.cyanLight,
            pointHoverBorderColor: this.themeColors.cyanLight
        }
    ];
    lineChartLegend = true;
    lineChartType = 'line';

    //Stacked Area Chart
    stackedAreaChartData: Array<any> = [
        { data: [28, 48, 40, 55, 86, 55, 90]}
    ];
    currentstackedAreaChartLabelsIdx = 2;
    stackedAreaChartLabels:Array<any> = ["16th", "17th", "18th", "19th", "20th", "21th", "22th"];
    stackedAreaChartOptions: any = {
        responsive: true,
        hover: {
            mode: 'nearest',
            intersect: true
        },
        elements: {
            line: {
                tension: 0.5
            },
            point: { 
                radius: 0 
            }
        },
        scales: {
            xAxes: [{ 
                gridLines: [{
                    display: false,
                }],
                ticks: {
                    fontColor: this.themeColors.grayLight,
                    display: true,
                    beginAtZero: true,
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
                    zeroLineBorderDash: [3, 4],
                    scaleLabel: {
                        display: false,
                        labelString: 'Value'
                    }    
                },
                ticks: {
                    max: 100,                            
                    stepSize: 20,
                    display: true,
                    beginAtZero: true,
                    fontColor: this.themeColors.grayLight,
                    fontSize: 13,
                    padding: 10
                }
            }],
        }
    };
    stackedAreaChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.blueLight,
            borderColor: this.themeColors.blue,
            pointBackgroundColor: this.themeColors.blue,
            pointBorderColor: this.themeColors.white,
            pointHoverBackgroundColor: this.themeColors.blueLight,
            pointHoverBorderColor: this.themeColors.blueLight
        }
    ];
    stackedAreaChartLegend = true;
    stackedAreaChartType = 'line';


    //Bar Chart
    barChartOptions: any = {
        scaleShowVerticalLines: false,
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
                    max: 100,                            
                    stepSize: 20,
                    display: true,
                    beginAtZero: true,
                    fontSize: 13,
                    padding: 10
                }
            }]
        }
    };
    barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011',];
    barChartType = 'bar';
    barChartLegend = true;
    barChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.blue,
            borderWidth: 0
        },
        { 
            backgroundColor: this.themeColors.blueLight,
            borderWidth: 0
        }
    ];
    barChartData: any[] = [
        { 
            data: [65, 59, 80, 81, 56, 55],
            label: 'Series A',
            categoryPercentage: 0.45,
            barPercentage: 0.70,
        },
        { 
            data: [28, 48, 40, 19, 86, 27],
            label: 'Series B',
            categoryPercentage: 0.45,
            barPercentage: 0.70,
        }
    ];


    //Radar Chart
    radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
    radarChartOptions: any = {
        responsive: true,
        scale: {
            ticks: {
                max: 100,                            
                stepSize: 25,
            },
            gridLines: {
                color: this.themeColors.border
            },  
            angleLines: {
                color: this.themeColors.border
            }   
        } 
    }  
    radarChartColors: Array<any> = [
        { 
            backgroundColor: this.themeColors.blueLight,
            borderWidth: 2,
            borderColor: this.themeColors.blue
        },
        { 
            backgroundColor: this.themeColors.cyanLight,
            borderWidth: 2,
            borderColor: this.themeColors.cyan
        }
    ];
    radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    radarChartType = 'radar';

    // Doughnut Chart
    doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    doughnutChartData: number[] = [350, 450, 100];
    doughnutChartColors: Array<any> =  [{ 
        backgroundColor: [this.themeColors.blue, this.themeColors.gold, this.themeColors.cyan],
        pointBackgroundColor : [this.themeColors.blue, this.themeColors.gold, this.themeColors.cyan]
    }];
    doughnutChartType = 'doughnut';

    // PolarArea Chart
    polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    polarAreaLegend = true;
    polarAreaChartOptions: any = {
        responsive: true,
        scale: {
            ticks: {
                max: 500,                            
                stepSize: 100,
            },
            gridLines: {
                color: this.themeColors.border
            },  
            angleLines: {
                color: this.themeColors.border
            }   
        } 
    };

    polarAreaChartColors: Array<any> = [{ 
        backgroundColor: [
            this.themeColors.blueLight,
            this.themeColors.cyanLight, 
            this.themeColors.goldLight,
            this.themeColors.purpleLight,
            this.themeColors.redLight,
        ],
        borderColor : [
            this.themeColors.blue, 
            this.themeColors.cyan, 
            this.themeColors.gold,
            this.themeColors.purple,
            this.themeColors.red,
        ]
    }];
    polarAreaChartType = 'polarArea'
}  