import {Component, signal} from '@angular/core';
import {form, FormField, maxLength, minLength, pattern, required} from "@angular/forms/signals";
import {JsonPipe} from "@angular/common";
import {validateCreditCardNumber} from "./credit-card-validator";

@Component({
  selector: 'app-signal-form',
  imports: [
    FormField,
    JsonPipe
  ],
  templateUrl: './signal-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class SignalFormComponent {
  userInfo = signal({
    firstName: "",
    lastName: "",
    street: "",
    zip: "",
    city: "",
    cc: ""
  });

  userForm = form(this.userInfo, (path) => {
    required(path.firstName, {message: 'First name is required'});
    required(path.zip);
    pattern(path.zip, new RegExp("[0-9]{5}"), {message: 'Zipcode must be 5-digit long'});
    validateCreditCardNumber(path.cc)
  });

  logForm(event: Event) {
    console.log(this.userForm().value());
  }
}
