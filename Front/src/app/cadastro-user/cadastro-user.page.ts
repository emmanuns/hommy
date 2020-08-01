import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.page.html',
  styleUrls: ['./cadastro-user.page.scss'],
})
export class CadastroUserPage implements OnInit {

  registerForm: FormGroup;
  
    submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder) { 
  this.registerForm = this.formbuilder.group({
    name: [null, [Validators.required, Validators.maxLength(25)]],
    password: [null, [Validators.required, Validators.minLength(8)]],
    email: [null, [Validators.email, Validators.required]],
    status: [null, [Validators.required]],
    phone: [null, [Validators.required]],
  });
  }
  ngOnInit() {
  }

}
