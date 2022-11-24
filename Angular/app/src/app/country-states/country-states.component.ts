import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-states',
  templateUrl: './country-states.component.html',
  styleUrls: ['./country-states.component.css'],
})
export class CountryStatesComponent implements OnInit {
  val = false;
  food: Array<any> = [
    {
      s_no: 0,
      name: 'India',
      num: [
        'TamilNadu',
        'Kerala',
        'Andhara Pradesh',
        'Karnataka',
        'Telugana',
        'Maharastra',
      ],
    },
    { s_no: 1, name: 'USA', num: ['California', 'Texas', 'Floria', 'Hawai'] },
    { s_no: 2, name: 'CANADA', num: ['Alberta', 'Manitoba', 'Nunavut'] },
  ];
  spice?: [];

  state(e: Event) {
    this.val = true;
    this.spice = this.food[+(<HTMLInputElement>e.target).value].num;
  }
  constructor() {}

  ngOnInit(): void {}
}
