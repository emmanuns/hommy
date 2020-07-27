import { Component, OnInit } from '@angular/core';

class Dormitory {
  ad_name: string;
  address: string;
  price: number;
  bills_included: boolean;
  description: string;
  photo: string;
}

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {
  dormitories: Dormitory[];

  constructor() {}

  ngOnInit() {
    this.dormitories = [
      {
      ad_name: "República da Maria",
      address: "Conde de Bonfim, 220 - Tijuca",
      price:750.00,
      bills_included: true,
      description: "Quarto individual, contendo cama e mesa para estudos.",
      photo:"../../assets/01.jpg",
      }, {
        ad_name: "Casinha",
        address: "Antunes Garcia, 300 - Sampaio",
        price:300.00,
        bills_included: false,
        description: "Quarto compartilhado, com ar",
        photo:"../../assets/casinhaazul.jpg",
      }, {
        ad_name: "República dos Amigos",
        address: "João Lira, 20 - Leblon",
        price:900.00,
        bills_included: false,
        description: "Quarto individual, com banheiro contendo cama, armário e mesa.",
        photo:"../../assets/blue.jpg",
      }];
  }
}