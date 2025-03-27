import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNumChar]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: NumCharDirective,
      multi: true
    },
    
  ],
})
export class NumCharDirective implements Validator {

  @Input() appNumChar: number = 6;

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {

    if(control.value === null) {
      return null;
    }
    return control.value.length >= 2 && control.value.length <= this.appNumChar 
      ? null 
      : { 'appNumChar': {errore: "deve essere compreso tra 2 e 6 caratteri"} };



  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
