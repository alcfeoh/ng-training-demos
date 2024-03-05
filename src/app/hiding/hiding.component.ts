import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-hiding',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: 'hiding.component.html'
})
export class HidingComponent {

  value: string = "";


}
