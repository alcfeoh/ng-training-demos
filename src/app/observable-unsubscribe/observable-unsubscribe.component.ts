import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-observable-unsubscribe',
  templateUrl: './observable-unsubscribe.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./observable-unsubscribe.component.css']
})
export class ObservableUnsubscribeComponent {

  continentSelect = new FormControl();
  currentSelection?: string;
  subscription: Subscription;

  constructor() {
    this.subscription = this.continentSelect.valueChanges.subscribe((newValue) => {
      this.currentSelection = newValue;
    });
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
