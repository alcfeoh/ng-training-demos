import { Component } from '@angular/core';


@Component({
    selector: 'app-ngswitch',
    template: `
    <div>
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
        @default {
          <p>No page selected</p>
        }
      }
    </div>

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
