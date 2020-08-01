import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastro-dorm',
  templateUrl: './cadastro-dorm.page.html',
  styleUrls: ['./cadastro-dorm.page.scss'],
})
export class CadastroDormPage implements OnInit {
 
  registerForm: FormGroup;
  
  submitForm(form){
  console.log(form);
  console.log(form.value);
}

  constructor() { }

  ngOnInit() {
  }

}
