import { Component } from '@angular/core'

@Component({
    templateUrl: './pricing.component.html'
})

export class PricingComponent {

    plans:string = "monthly"

    duration:string = "month";

    feesBasic: number = 15;
    feesStandard: number = 40;
    feesPremium: number = 120;

    planChange() {
        if (this.plans == 'annually') {
            this.feesBasic = 120;
            this.feesStandard = 800;
            this.feesPremium = 2200;
            this.duration = 'anual';
        } else  {
            this.feesBasic = 15;
            this.feesStandard = 40;
            this.feesPremium = 120;
            this.duration = 'month';
        }
    }
}    