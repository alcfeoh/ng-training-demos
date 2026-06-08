import { Component, ChangeDetectionStrategy } from '@angular/core';
import {SpinnerComponent} from './spinner.component';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    imports: [
        SpinnerComponent
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

  spin = false;

  constructor() { }
}
