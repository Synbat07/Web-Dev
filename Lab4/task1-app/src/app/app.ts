import { Component } from '@angular/core';
import { Child } from './child';

@Component({
  selector: 'app-root',
  imports: [Child],
  template: `
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
})
export class App {

  items = new Array<string>();

  addItem(item: string) {
    this.items.push(item);
  }
}
