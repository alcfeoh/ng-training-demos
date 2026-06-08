import {Component, Input, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-message',
    imports: [
        FormsModule
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
    <input type="text" [(ngModel)]="message">
  `
})
export class MessageComponent  {

  messageValue?: string;

  @Output()
  messageChange = new EventEmitter<string>();

  @Input()
  get message(){
    return this.messageValue;
  }

  set message(val) {
    this.messageValue = val;
    this.messageChange.emit(this.messageValue);
  }
}
