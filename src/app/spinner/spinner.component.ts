import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    imports: [
        NgIf
    ],
    styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  @Input()
  isLoading = false;

  constructor() { }

}
