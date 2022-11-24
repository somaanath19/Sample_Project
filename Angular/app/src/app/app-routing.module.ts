import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryStatesComponent } from './country-states/country-states.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: 'cur',
    component: CurrencyConverterComponent,
  },
  {
    path: 'coun',
    component: CountryStatesComponent,
  },
  {
    path: 'emp',
    component: EmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
