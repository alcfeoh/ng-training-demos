import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {CreditCardValidatorDirective} from './credit-card-validator.directive';

@Component({
  selector: 'app-forms',
  templateUrl: 'template-driven-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    CreditCardValidatorDirective
  ],
  styleUrls: ['template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  constructor() {}

  logForm(value: unknown) {
    console.log(value);
  }
}
