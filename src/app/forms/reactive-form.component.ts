import {Component, OnInit} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {CreditCardValidatorDirective} from './credit-card-validator.directive';

@Component({
    selector: 'app-forms',
    templateUrl: 'reactive-form.component.html',
    imports: [
        ReactiveFormsModule
    ],
    styleUrls: ['template-driven-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: '',
      street: '',
      zip: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      city: '',
      cc: ['', [Validators.required, CreditCardValidatorDirective.validateCcNumber] ]
    });

    this.registerForm.controls['zip'].valueChanges
      .subscribe(newValue => console.log(newValue));

    this.registerForm.controls['zip'].statusChanges
      .subscribe(newStatus => console.log(newStatus));
  }

  logForm(): void {
    console.log(this.registerForm.value);
  }
}
