import { Component } from '@angular/core';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
    selector: 'app-ngswitch',
    imports: [
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault
    ],
    template: `
    <div [ngSwitch]="page">
      <p *ngSwitchCase="1">Viewing content of first page</p>
      <p *ngSwitchCase="2">Viewing content of second page</p>
      <p *ngSwitchCase="3">Viewing content of third page</p>
      <p *ngSwitchDefault>No page selected</p>
    </div>

    @switch (page) {
      @case (1) {
        <p>Viewing content of first page</p>
      }
      @case (2) {
        <p>Viewing content of second page</p>
      }
      @case (3) {
        <p>Viewing content of third page</p>
      }
      @default() {
        <p>No page selected</p>
      }
    }
    <div>
      <button (click)="page = 1">Page 1</button>
      <button (click)="page = 2">Page 2</button>
      <button (click)="page = 3">Page 3</button>
    </div>
  `
})
export class NgSwitchComponent {

  page = 0;

}
