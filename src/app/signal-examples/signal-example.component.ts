import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-signal-examples',
  template: `
    <h1>Hello {{ name() }}!</h1>
    <button (click)="name.set('WORLD')">
      Change text to WORLD
    </button>
    <button (click)="name.set('EARTH')">
      Change text to EARTH
    </button>
  `
})
export class SignalExampleComponent {
  name = signal('Angular');
}
