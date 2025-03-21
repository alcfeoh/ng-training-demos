import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
    selector: 'app-ng-class',
    templateUrl: './ng-class.component.html',
    imports: [
        NgClass
    ],
    styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  isBlue?: boolean;
  isGreen?: boolean;
  isWhite?: boolean;

}
