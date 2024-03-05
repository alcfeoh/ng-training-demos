import { Component } from '@angular/core';
import {SpinnerComponent} from './spinner.component';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  standalone: true,
  imports: [
    SpinnerComponent
  ],
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

  spin = false;

  constructor() { }
}
