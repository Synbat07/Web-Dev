import {Component} from '@angular/core';

@Component ( {
    selector: 'app-root',
    templete: 'Hello Universe',

    styles: `
  :host {
    color: #a144eb;
  }`,
})
export class App{}