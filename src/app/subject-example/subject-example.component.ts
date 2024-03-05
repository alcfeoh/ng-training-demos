import { Component } from '@angular/core';
import {Component2Component} from './component2/component2.component';
import {Component1Component} from './component1/component1.component';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-subject-example',
  standalone: true,
  imports: [
    Component2Component,
    Component1Component,
    NgForOf
  ],
  templateUrl: './subject-example.component.html'
})
export class SubjectExampleComponent {

  cards = [''];

  constructor() {

  }
}
