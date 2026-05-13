import {maxLength, minLength, required, SchemaPath, validate} from "@angular/forms/signals";

export function validateCreditCardNumber(field: SchemaPath<string>) {
  required(field, {message: 'A credit card number is required'});
  mustBeFromValidProvider(field);
  minLength(field, 16, {message: 'A credit card number must be 16-digit long'});
  maxLength(field, 16, {message: 'A credit card number must be 16-digit long'});
}


function mustBeFromValidProvider(field: SchemaPath<string>) {
  validate(field, ({value}) => {
    if (! (value().startsWith('37') || value().startsWith('4') || value().startsWith('5')) ) {
      return {
        kind: 'cc-provider',
        message: 'Your credit card is not from a supported provider',
      };
    }
    return null;
  });
}
