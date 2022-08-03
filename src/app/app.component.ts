import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  purchase: number = 0;
  downPayment: number = 0;
  repayment: number = 0;
  interest: number = 0;

  prMonthly : number = 0;

  get loanAmount() : number {
    return this.purchase - this.downPayment | 0;
  }

  getMortgageQuote() : void {
    const rate = this.interest/100/ 12;
    const numberOfPayments = this.repayment * 12;
    const stableConst = Math.pow(1 + rate, numberOfPayments);
    this.prMonthly =  Math.floor(this.loanAmount * ((rate*stableConst)/((stableConst)-1)));
  }
}
