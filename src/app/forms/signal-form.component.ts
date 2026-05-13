import {Component, signal} from '@angular/core';
import {form, FormField, maxLength, minLength, pattern, required} from "@angular/forms/signals";
import {JsonPipe} from "@angular/common";

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
    required(path.cc, {message: 'A credit card number is required'});
    minLength(path.cc, 16, {message: 'A credit card number must be 16-digit long'});
    maxLength(path.cc, 16, {message: 'A credit card number must be 16-digit long'});
  });

  logForm(event: Event) {
    console.log(this.userForm().value());
  }
}
