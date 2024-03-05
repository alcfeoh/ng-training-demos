import {Component} from '@angular/core';
import {MessageComponent} from './message.component';

@Component({
  selector: 'app-two-way-data-binding-example',
  standalone: true,
  imports: [
    MessageComponent
  ],
  template: `
    <app-message [(message)]="myMessage"></app-message>
    <div>
      myMessage value: {{ myMessage }}
    </div>
  `
})
export class TwoWayDataBindingExampleComponent  {

  myMessage = 'world';
}
