import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  from?: string;
  name?: string;
  b?: string;
  num1?: number;
  num2?: number;
  onFrom(val: string) {
    this.from = val;
  }

  onTo(val: string) {
    this.name = val;
  }
  a(val: string) {
    this.b = val;
  }
  us_inr(val: string) {
    this.num1 = +val;
    if (this.from == 'IN') {
      this.num2 = this.num1 / 82;
    } else {
      this.num2 = this.num1 * 82;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
