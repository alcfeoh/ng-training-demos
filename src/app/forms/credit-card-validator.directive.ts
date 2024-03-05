import { Directive } from '@angular/core';
import {UntypedFormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appCreditCardValidator]',
  standalone: true,
  providers: [
    {provide: NG_VALIDATORS, useExisting: CreditCardValidatorDirective, multi: true}
  ]
})
export class CreditCardValidatorDirective implements Validator{

  constructor() { }

  validate(c: UntypedFormControl): ValidationErrors | null {
    return CreditCardValidatorDirective.validateCcNumber(c);
  }

  static validateCcNumber(control: UntypedFormControl): ValidationErrors | null {
    if (control.value){
      if ( ! (control.value.startsWith('37')
        || control.value.startsWith('4')
        || control.value.startsWith('5'))) {
        return {creditCard : 'Your credit card number is not from a supported credit card provider'};
      }else if (control.value.length !== 16) {
        // Return error if length is not 16 digits
        return {creditCard : 'A credit card number must be 16-digit long'};
      }
    }
    return null;
  }

}
