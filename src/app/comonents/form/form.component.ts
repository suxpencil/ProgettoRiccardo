import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NumCharDirective } from '../../directive/num-char.directive';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    NumCharDirective
  ],
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent implements OnInit {

  studente = {
    nome: '',
    cognome: '',
    check: false,
    mail: ''
  };

  reactiveForm : FormGroup= new FormGroup({
    nome: new FormControl('', Validators.minLength(4)),
    cognome: new FormControl(''),
    //mail: new FormControl('', [Validators.email, Validators.required])
  });

  sub$!:Subscription;

  ngOnInit(){
    this.sub$ = this.reactiveForm.controls['nome'].valueChanges
    .pipe(debounceTime(2000), distinctUntilChanged())
    .subscribe((newValue) => {
      console.log('nuovo valore:', newValue);
    });
  }

  aggiornaForm(event: any){

      if(event.srcElement.checked){
        this.reactiveForm.addControl('mail', new FormControl('', [Validators.email, Validators.required]));
      } else {
        this.reactiveForm.removeControl('mail');
      }
  }

  reset(){
    this.studente.nome = '';
    this.studente.cognome = ''; 
    this.studente.check = false;
    this.studente.mail = '';
  }

}

