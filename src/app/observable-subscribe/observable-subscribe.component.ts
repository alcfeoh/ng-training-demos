import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-observable-subscribe',
  templateUrl: './observable-subscribe.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./observable-subscribe.component.css']
})
export class ObservableSubscribeComponent {

  continentSelect = new FormControl<string>('');
  currentSelection?: string | null;

  constructor() {
    this.continentSelect.valueChanges.subscribe((newValue) => {
        this.currentSelection = newValue;
    });
  }
}

