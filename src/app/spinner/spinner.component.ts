import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  @Input()
  isLoading = false;

  constructor() { }

}
