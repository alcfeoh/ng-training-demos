import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Component2Component} from './component2/component2.component';
import {Component1Component} from './component1/component1.component';



@Component({
    selector: 'app-subject-example',
    imports: [
    Component2Component,
    Component1Component
],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './subject-example.component.html'
})
export class SubjectExampleComponent {

  cards = [''];

  constructor() {

  }
}
