import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  submitForm(form){
  console.log(form);
  console.log(form.value);
}
  constructor(public formbuilder: FormBuilder) { 
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required,]],
    });
  }

  ngOnInit() {
  }

}
