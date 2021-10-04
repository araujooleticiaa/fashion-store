import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent{

  constructor() {
   }

   camposForm =  new FormGroup({
     nome: new FormControl(''),
     email: new FormControl(''),
     mensagem: new FormControl('')
   })

  submit() {
    console.log(this.camposForm.value);
    alert('Email enviado com sucesso')
  }

}
