import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

class Dormitory {
  ad_name: string;
  address: string;
  price: number;
  bills_included: boolean;
  description: string;
  photo: string;
}

class People {
  photo: string;
  name: string;
}

@Component({
  selector: 'app-coments',
  templateUrl: './coments.page.html',
  styleUrls: ['./coments.page.scss'],
})
export class ComentsPage implements OnInit {
  dormitories: Dormitory[];
  infos: People[];

  comentForm: FormGroup;
  
    submitForm(form){
    console.log(form);
    console.log(form.value);
  }

  constructor(public formbuilder: FormBuilder) {
    this.comentForm = this.formbuilder.group({
      coment: [null, [Validators.required, Validators.maxLength(120)]],
    });
   }

  ngOnInit() {
    this.dormitories = [
      {
        ad_name: "República dos Amigos",
        address: "João Lira, 20 - Leblon",
        price:900.00,
        bills_included: false,
        description: "Quarto individual, com banheiro contendo cama, armário e mesa.",
        photo:"../../assets/blue.jpg",
      }];
    this.infos = [
      {
        photo:"../../assets/carla.jpg",
        name:"Carla Braga",
      }];
  }

}
