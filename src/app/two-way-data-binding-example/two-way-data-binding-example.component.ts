import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MessageComponent} from './message.component';

@Component({
    selector: 'app-two-way-data-binding-example',
    imports: [
        MessageComponent
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
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
