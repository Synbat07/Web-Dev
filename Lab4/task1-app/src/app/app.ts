import { Component } from '@angular/core';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
  template: `
    <ul>
      <li>Number with "decimal" {{ num | number:'3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date:'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
})
export class App {
  num = 103.1234;
  birthday = new Date('2023-04-02');
  cost = 4560.34;
}
